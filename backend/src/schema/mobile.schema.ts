import { z } from "zod";
export const MobileSchema = z.object({
    name: z.string(),
    brand: z.string(),
    price: z.number(),
    color: z.string(),
    ram: z.string(),
    rom: z.string(),
    frontcamera: z.string(),
    backcamera: z.string(),
    screen: z.string(),
    processor: z.string(),
    battery: z.string(),
    oldprice: z.string(),
    warranty: z.string(),
    discount: z.string(),
    exchange: z.number(),
    image: z.string().optional()
});
