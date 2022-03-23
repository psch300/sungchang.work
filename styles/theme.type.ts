import "styled-components";

type ScreenType = "sm" | "md" | "lg" | "xl" | "2xl";

type SpacingType =
  | "px"
  | 0
  | 0.5
  | 1
  | 1.5
  | 2
  | 2.5
  | 3
  | 3.5
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 14
  | 16
  | 20
  | 24
  | 28
  | 32
  | 36
  | 40
  | 44
  | 48
  | 52
  | 56
  | 60
  | 64
  | 72
  | 80
  | 96;

type FontSizeType =
  | "xs"
  | "sm"
  | "base"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | "8xl"
  | "9xl";

type FontWeightType =
  | "thin"
  | "extralight"
  | "light"
  | "normal"
  | "medium"
  | "semibold"
  | "bold"
  | "extrabold"
  | "black";

declare module "styled-components" {
  export interface DefaultTheme {
    screens: Record<ScreenType, CSSProperties["minWidth"]>;
    spacing: Record<
      SpacingType,
      CSSProperties["margin"] | CSSProperties["padding"]
    >;
    fontSize: Record<
      FontSizeType,
      [
        CSSProperties["fontSize"],
        Record<"lineHeight", CSSProperties["lineHeight"]>
      ]
    >;
    fontWeight: Record<FontWeightType, CSSProperties["fontWeight"]>;
  }
}

export type { ScreenType, SpacingType, FontSizeType, FontWeightType };
