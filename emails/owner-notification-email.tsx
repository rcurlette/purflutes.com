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

export type OwnerNotificationEmailProps = {
  email: string
  name?: string | null
  source?: string | null
  interests?: string | null
  notes?: string | null
}

export function OwnerNotificationEmail({
  email,
  name,
  source,
  interests,
  notes,
}: OwnerNotificationEmailProps) {
  const rows: Array<{ label: string; value: string }> = [
    { label: "Email", value: email },
    { label: "Name", value: name?.trim() || "—" },
    { label: "Source", value: source?.trim() || "website" },
    { label: "Interests", value: interests?.trim() || "—" },
    { label: "Notes", value: notes?.trim() || "—" },
  ]

  return (
    <Html>
      <Head />
      <Preview>{`New signup: ${email}`}</Preview>
      <Body style={body}>
        <Container style={container}>
          <Heading style={heading}>New signup on PurFlutes</Heading>
          <Text style={subtext}>Someone just joined the list.</Text>

          <Hr style={hr} />

          <Section>
            {rows.map((row) => (
              <Row key={row.label} style={dataRow}>
                <Column style={labelCol}>{row.label}</Column>
                <Column style={valueCol}>{row.value}</Column>
              </Row>
            ))}
          </Section>
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
