import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components"

type WelcomeEmailProps = {
  name?: string | null
}

export function WelcomeEmail({ name }: WelcomeEmailProps) {
  const greeting = name?.trim() ? `Welcome, ${name.trim()}.` : "Welcome."

  return (
    <Html>
      <Head />
      <Preview>You&apos;re on the list — flute drops, ceremony invites, and event news.</Preview>
      <Body style={body}>
        <Container style={container}>
          <Section style={header}>
            <Text style={brand}>PurFlutes</Text>
          </Section>

          <Heading style={heading}>{greeting}</Heading>

          <Text style={paragraph}>
            Thank you for joining the PurFlutes circle. You&apos;ll be the first to hear about new
            handcrafted flutes, ceremony invitations, and upcoming events.
          </Text>

          <Text style={paragraph}>
            Each flute is made by hand, tuned by ear, and carried by breath. We&apos;ll only reach out
            when there&apos;s something worth your attention — no noise, no spam.
          </Text>

          <Hr style={hr} />

          <Text style={footer}>
            With breath and gratitude,
            <br />
            The PurFlutes team
          </Text>

          <Text style={footerSmall}>
            You received this because you signed up at{" "}
            <Link href="https://purflutes.com" style={link}>
              purflutes.com
            </Link>
            . Unsubscribe anytime by replying to this email.
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

export default WelcomeEmail

const body: React.CSSProperties = {
  backgroundColor: "#f5f1ea",
  fontFamily:
    'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  margin: 0,
  padding: "32px 0",
}

const container: React.CSSProperties = {
  backgroundColor: "#ffffff",
  border: "1px solid #e7ded0",
  borderRadius: "12px",
  margin: "0 auto",
  maxWidth: "560px",
  padding: "40px",
}

const header: React.CSSProperties = {
  paddingBottom: "8px",
}

const brand: React.CSSProperties = {
  color: "#7a5c3b",
  fontSize: "20px",
  fontWeight: 700,
  letterSpacing: "0.08em",
  margin: 0,
  textTransform: "uppercase",
}

const heading: React.CSSProperties = {
  color: "#2b2118",
  fontSize: "26px",
  fontWeight: 600,
  margin: "16px 0 8px",
}

const paragraph: React.CSSProperties = {
  color: "#4a4035",
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "0 0 16px",
}

const hr: React.CSSProperties = {
  borderColor: "#e7ded0",
  margin: "28px 0 20px",
}

const footer: React.CSSProperties = {
  color: "#2b2118",
  fontSize: "16px",
  lineHeight: "1.5",
  margin: "0 0 20px",
}

const footerSmall: React.CSSProperties = {
  color: "#8a7d6b",
  fontSize: "13px",
  lineHeight: "1.5",
  margin: 0,
}

const link: React.CSSProperties = {
  color: "#7a5c3b",
  textDecoration: "underline",
}
