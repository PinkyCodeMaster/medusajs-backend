import type { SubscriberArgs, SubscriberConfig } from "@medusajs/framework";
import { Modules } from "@medusajs/framework/utils";
import type { INotificationModuleService } from "@medusajs/framework/types";

export default async function userInviteHandler({
	event: { data },
	container,
}: SubscriberArgs<{ invite: string, email: string }>) {
	const notificationModuleService: INotificationModuleService =
		container.resolve(Modules.NOTIFICATION);

	await notificationModuleService.createNotifications({
		to: data.email,
        template: 'd-afe7c5606ae34aef9da1fc6fde6a4d15',
		channel: "email",
        data: {
            invite_link: data.invite
        }
	});
}

export const config: SubscriberConfig = {
	event: ["invite.created", "invite.resent"],
};
