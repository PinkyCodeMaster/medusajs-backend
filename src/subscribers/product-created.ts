import type {
  SubscriberArgs,
  SubscriberConfig,
} from "@medusajs/framework"
import { Modules } from "@medusajs/framework/utils"
import type { INotificationModuleService } from "@medusajs/framework/types"

export default async function productCreateHandler({
  event: { data },
  container,
}: SubscriberArgs<{ id: string }>) {
   
  const notificationModuleService: INotificationModuleService =
    container.resolve(Modules.NOTIFICATION)
   

  await notificationModuleService.createNotifications({
    to: "scottjones@netgurusolutions.co.uk",
    channel: "email",
    template: "d-b68d866a1c06472fa500cd4f794b6936",
    data: {
      product_id: data.id,
    },
   })
   
}

export const config: SubscriberConfig = {
  event: "product.created",
}