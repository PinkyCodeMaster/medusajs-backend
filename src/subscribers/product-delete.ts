import type { SubscriberArgs, SubscriberConfig } from "@medusajs/framework";
import { Modules } from "@medusajs/framework/utils";
import type { INotificationModuleService } from "@medusajs/framework/types";

export default async function productDeleteHandler({
	event: { data },
	container,
}: SubscriberArgs<{ id: string }>) {
	const notificationModuleService: INotificationModuleService =
		container.resolve(Modules.NOTIFICATION);

	await notificationModuleService.createNotifications({
		to: "scottjones@netgurusolutions.co.uk",
		channel: "email",
		template: "d-401a9517c5184c1399a9f1e5497022cb",
		data: {
			product_id: data.id,
		},
	});
}

export const config: SubscriberConfig = {
	event: "product.deleted",
};
