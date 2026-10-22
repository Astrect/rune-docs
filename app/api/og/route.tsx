import type { CSSProperties, ReactNode } from "react";
import { ImageResponse } from 'next/og';

interface BadgeProps {
  children: ReactNode;
  color?: string;
  background?: string;
  /** Draws a 1px solid border in this color. */
  borderColor?: string;
  uppercase?: boolean;
  style?: CSSProperties;
}


/**
 * Pill label. Column parents stretch it to full width; pass
 * `style={{ alignSelf: "flex-start" }}` to keep it hugging its content.
 */
const Badge = ({
  children,
  color,
  background,
  borderColor,
  uppercase = false,
  style,
}: BadgeProps) => (
  <div
    style={{
      alignItems: "center",
      borderRadius: "999px",
      display: "flex",
      fontSize: "26px",
      fontWeight: 600,
      gap: "12px",
      padding: "10px 22px",
      // Satori throws on `undefined` style values, so optional ones are spread in.
      ...(background && { backgroundColor: background }),
      ...(borderColor && { border: `1px solid ${borderColor}` }),
      ...(color && { color }),
      ...(uppercase && { letterSpacing: "0.04em", textTransform: "uppercase" }),
      ...style,
    }}
  >
    {children}
  </div>
);

interface BrandMarkProps {
  /** Logo URL or data URI. Satori decodes PNG, JPEG, and GIF only. */
  src?: string;
  size?: number;
  radius?: number | string;
  /** Placeholder tile background when `src` is empty. Accepts colors and gradients. */
  background?: string;
  fit?: "contain" | "cover";
  /** Placeholder tile content when `src` is empty, such as a monogram or icon. */
  children?: ReactNode;
  style?: CSSProperties;
}

const BrandMark = ({
  size = 40,
  radius = 8,
  children,
}: BrandMarkProps) =>
(
  <div
    style={{
      alignItems: "center",
      background: "linear-gradient(180deg, #5c5c5c 0%, #0f1015 100%)",
      borderRadius: radius,
      display: "flex",
      flexShrink: 0,
      height: size,
      justifyContent: "center",
      overflow: "hidden",
      width: size,
    }}
  >
    {children ?? (
      <svg width="62%" height="62%" viewBox="0 0 16 16" fill="none">
        <path
          d="M8 3.75s-3-2-6.25-2v10.5c3.25 0 6.25 2 6.25 2m0-10.5s3-2 6.25-2v10.5c-3.25 0-6.25 2-6.25 2m0-10.5v10.5"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </svg>
    )}
  </div>
);

interface OGImageProps {
  name: string;
  title: string;
  url: string;
  description: string;
  logo?: string;
  items?: string[];
}

const OGImage = ({
  name,
  title,
  url,
  description,
  items = [],
}: OGImageProps) => (
  <div
    style={{
      backgroundColor: "#09090b",
      backgroundImage:
        "radial-gradient(ellipse at 70% 80%, rgba(120,50,60,0.15), transparent 60%), radial-gradient(ellipse at 20% 20%, rgba(60,60,80,0.1), transparent 50%)",
      color: "#fafafa",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      justifyContent: "space-between",
      padding: "72px",
      position: "relative",
      width: "100%",
    }}
  >
    <div
      style={{
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <div style={{ alignItems: "center", display: "flex", gap: "16px" }}>
        <BrandMark size={48} radius="12" />
        <div
          style={{
            fontSize: "32px",
            fontWeight: 600,
            letterSpacing: "-0.01em",
          }}
        >
          {name}
        </div>
      </div>
      <div
        style={{
          color: "#71717a",
          fontSize: "28px",
          fontWeight: 500,
        }}
      >
        {url}
      </div>
    </div>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        marginTop: "-40px",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: title.length > 20 ? 96 : 120,
          fontWeight: 700,
          letterSpacing: "-0.04em",
          lineHeight: 1,
          textWrap: "balance" as const,
        }}
      >
        {title}
      </div>
      <div
        style={{
          color: "#a1a1aa",
          display: "flex",
          fontSize: "36px",
          fontWeight: 400,
          lineHeight: 1.3,
          maxWidth: "800px",
          textWrap: "balance" as const,
        }}
      >
        {description}
      </div>
    </div>
    {items.length > 0 && (
      <div
        style={{
          alignItems: "center",
          display: "flex",
          gap: "16px",
        }}
      >
        {items.map((item) => (
          <Badge
            background="rgba(255,255,255,0.06)"
            borderColor="rgba(255,255,255,0.1)"
            color="#d4d4d8"
            key={item}
            style={{
              borderRadius: "8px",
              fontSize: "24px",
              fontWeight: 500,
              padding: "12px 20px",
            }}
          >
            {item}
          </Badge>
        ))}
      </div>
    )}
  </div>
);

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') || 'Rune Docs';
  const description =
    searchParams.get('description') ||
    // Accept URLs copied from HTML with the query separator still entity-escaped.
    searchParams.get('amp;description') ||
    'Community-driven docs and resources for RuneScape plugin development.';

  return new ImageResponse(
    <OGImage
      name={"Rune Docs"}
      title={title}
      url="runedocs.astrect.me"
      description={description}
    //items={["creating mods", "open source", "accessible"]}
    />,
    {
      width: 1200,
      height: 630,
    }
  );
}
