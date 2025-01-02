import { sql } from "drizzle-orm";
import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

// Benchmarks Table
// id
// deviceName
// deviceBrand
// deviceModel
// deviceOS
// deviceOSVersion
// deviceMemory
// deviceProcessor
// deviceGraphics
// deviceStorage
// score
// createdAt
// updatedAt
// deviceId

// export const benchmarks = sqliteTable("benchmarks", {
//     id: int().primaryKey({ autoIncrement: true }),
//     deviceName: text('device_name').notNull(),
//     deviceBrand: text('device_brand').notNull(),
//     deviceModel: text('device_model').notNull(),
//     deviceOS: text('device_os').notNull(),
//     deviceOSVersion: text('device_os_version').notNull(),
//     deviceMemory: text('device_memory').notNull(),
//     deviceProcessor: text('device_processor').notNull(),
//     deviceGraphics: text('device_graphics').notNull(),
//     deviceStorage: text('device_storage').notNull(),
//     score: int().notNull(),
//     createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`).notNull(),
//     updatedAt: text('updated_at').default(sql`CURRENT_TIMESTAMP`).notNull(),
//     deviceId: text('device_id').notNull()
// });

export const messages = sqliteTable("messages", {
    id: int().primaryKey({ autoIncrement: true }),
    email: text().notNull(),
    subject: text().notNull(),
    message: text().notNull(),
    createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`).notNull(),
    category: text('category', {
        enum: ["general", "support", "feedback", "branding", "partnership", "other"]
    }).notNull().default("general")
});
