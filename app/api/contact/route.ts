import { db } from "@/db";
import { messages } from "@/db/schema";

export async function POST(req: Request) {
    try {
        const {
            email,
            subject,
            message,
            category
        } = await req.json();

        if (!email || !subject || !message) {
            return Response.json({ message: "Missing required fields." }, { status: 400 });
        }

        try {
            await db.insert(messages).values({
                email,
                subject,
                message,
                category
            });
        } catch (e) {
            console.error(e);
            return Response.json({ message: "Error adding to database" }, { status: 500 });
        }

        return Response.json({ message: "Message recieved." });
    } catch (e) {
        console.error(e);
        return Response.json({ message: "Error parsing request." }, { status: 400 });
    }
}