import { NextResponse } from "next/server";
import { APP_URL } from "../../../lib/constants";

export async function GET() {
  const farcasterConfig = {
  // TODO: Add your own account association
    accountAssociation: {
    "header": "eyJmaWQiOjg4NzExNCwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDAzRDA2RTM2ODU1RjI4MWZGNkQyNzZFQThEZDhjOGFiYjhjMmY3RjYifQ",
    "payload": "eyJkb21haW4iOiJmYXJjYXN0ZXItbWluaWFwcC10ZW1wbGF0ZS1ibHVzaC52ZXJjZWwuYXBwIn0",
    "signature": "IndpVnvb4C9RmLggZO23RZ0ADL9Hf5osBhWYZKgetfpPykLZ0OhpGsr/1rW2a0ld8G1sRffrzjdm9hUp5sFhHhw="
  },
    frame: {
      version: "1",
      name: "Farcaster MiniApp",
      iconUrl: `${APP_URL}/images/icon.png`,
      homeUrl: `${APP_URL}`,
      imageUrl: `${APP_URL}/images/feed.png`,
      screenshotUrls: [],
      tags: ["Base", "farcaster", "miniapp", "template"],
      primaryCategory: "developer-tools",
      buttonTitle: "Launch Template",
      splashImageUrl: `${APP_URL}/images/splash.png`,
      splashBackgroundColor: "#ffffff",
      webhookUrl: `${APP_URL}/api/webhook`,
    },
  };

  return NextResponse.json(farcasterConfig);
}
