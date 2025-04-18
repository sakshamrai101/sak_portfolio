// src/app/api/contact/route.ts
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
        return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    try {
        const data = await resend.emails.send({
            from: process.env.RESEND_FROM_EMAIL!,
            to: [process.env.RESEND_FROM_EMAIL!],
            subject: 'New Contact Form Submission',
            html: `
        <h2>Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
        });

        console.log('Resend response:', data);
        return NextResponse.json({ success: true });
    } catch (err) {
        console.error('Resend Error:', err);
        return NextResponse.json({ error: 'Email failed to send' }, { status: 500 });
    }
}
