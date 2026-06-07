import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Row,
  Column,
  Section,
  Text,
} from "@react-email/components"

export type OwnerNotificationRow = { label: string; value: string }

export type OwnerNotificationEmailProps = {
  title: string
  intro: string
  preview: string
  rows: OwnerNotificationRow[]
  /** Optional free-form block rendered below the rows, e.g. a message body. */
  message?: string | null
}

export function OwnerNotificationEmail({
  title,
  intro,
  preview,
  rows,
  message,
}: OwnerNotificationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>{preview}</Preview>
      <Body style={body}>
        <Container style={container}>
          <Heading style={heading}>{title}</Heading>
          <Text style={subtext}>{intro}</Text>

          <Hr style={hr} />

          <Section>
            {rows.map((row) => (
              <Row key={row.label} style={dataRow}>
                <Column style={labelCol}>{row.label}</Column>
                <Column style={valueCol}>{row.value}</Column>
              </Row>
            ))}
          </Section>

          {message ? (
            <>
              <Hr style={hr} />
              <Text style={messageLabel}>Message</Text>
              <Text style={messageBody}>{message}</Text>
            </>
          ) : null}
        </Container>
      </Body>
    </Html>
  )
}

export default OwnerNotificationEmail

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
  padding: "32px",
}

const heading: React.CSSProperties = {
  color: "#2b2118",
  fontSize: "22px",
  fontWeight: 600,
  margin: "0 0 4px",
}

const subtext: React.CSSProperties = {
  color: "#8a7d6b",
  fontSize: "14px",
  margin: 0,
}

const hr: React.CSSProperties = {
  borderColor: "#e7ded0",
  margin: "20px 0",
}

const dataRow: React.CSSProperties = {
  marginBottom: "12px",
}

const labelCol: React.CSSProperties = {
  color: "#8a7d6b",
  fontSize: "13px",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.04em",
  width: "100px",
  verticalAlign: "top",
}

const valueCol: React.CSSProperties = {
  color: "#2b2118",
  fontSize: "15px",
  lineHeight: "1.5",
}

const messageLabel: React.CSSProperties = {
  color: "#8a7d6b",
  fontSize: "13px",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.04em",
  margin: "0 0 8px",
}

const messageBody: React.CSSProperties = {
  color: "#2b2118",
  fontSize: "15px",
  lineHeight: "1.6",
  margin: 0,
  whiteSpace: "pre-wrap",
}
