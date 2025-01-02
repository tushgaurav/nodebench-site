import { db } from "@/db";
import { benchmarks } from "@/db/schema";

export async function POST(req: Request) {
    try {
        const {
            deviceName,
            deviceBrand,
            deviceModel,
            deviceOS,
            deviceOSVersion,
            deviceMemory,
            deviceProcessor,
            deviceGraphics,
            deviceStorage,
            score,
            deviceId
        } = await req.json();

        if (!deviceName || !deviceBrand || !deviceModel || !deviceOS || !deviceOSVersion || !deviceMemory || !deviceProcessor || !deviceGraphics || !deviceStorage || !score || !deviceId) {
            return Response.json({ message: "Missing required fields." }, { status: 400 });
        }

        try {
            await db.insert(benchmarks).values({
                deviceName,
                deviceBrand,
                deviceModel,
                deviceOS,
                deviceOSVersion,
                deviceMemory,
                deviceProcessor,
                deviceGraphics,
                deviceStorage,
                score,
                deviceId
            });
        } catch (e) {
            console.error(e);
            return Response.json({ message: "Error adding to database" }, { status: 500 });
        }

        return Response.json({ message: "Benchmark result saved." });
    } catch (e) {
        console.error(e);
        return Response.json({ message: "Error parsing request." }, { status: 400 });
    }
}