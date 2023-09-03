import 'websocket-polyfill'
import NDK from "@nostr-dev-kit/ndk";

const ndk = new NDK({
  explicitRelayUrls: ["ws://localhost:29100", "ws://localhost:29101"],
});

async function start() {
  await ndk.connect().catch((err) => console.log("connect() catch", err));

  const subOptions = { closeOnEose: false };

  const notesSub = ndk.subscribe({}, subOptions);
  notesSub.on("event", async (event) => {
    console.log("notes event", event);
  });
}

start().catch((err) => {
    console.log("start() catch", err)
});
