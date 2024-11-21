import type { SubscriberArgs, SubscriberConfig } from "@medusajs/framework";
import { Modules } from "@medusajs/framework/utils";

export default async function resetPasswordTokenHandler({
	event: {
		data: { entity_id: email, token, actor_type },
	},
	container,
}: SubscriberArgs<{ entity_id: string; token: string; actor_type: string }>) {
	const notificationModuleService = container.resolve(Modules.NOTIFICATION);

	const urlPrefix =
		actor_type === "customer"
			? "http://localhost:8000"
			: "http://localhost:9000/app";

	await notificationModuleService.createNotifications({
		to: email,
		channel: "email",
		template: "d-1a88ca080ec940ddbff5fac9b6efa53d",
		data: {
			url: `${urlPrefix}/reset-password?token=${token}&email=${email}`,
		},
	});
}

export const config: SubscriberConfig = {
	event: "auth.password_reset",
};
