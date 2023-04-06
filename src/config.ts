
import { ConfigType, defineConfig } from "zilch-game-engine";

export type Config = ConfigType<typeof config>;
export const config = defineConfig({
  initialPosition: {
    type: "textarea",
    label: "Initial Position",
  },
});
