import { APP_TITLE } from '@/src/lib/constants';
import { Html, Head, Preview, Body, Container, Section, Text, Button, Hr, Img, Heading } from '@react-email/components';
import { render } from "@react-email/render";

interface Props {
    identifier: string,
    magicLinkUrl: string,
}

//TODO: tailwindcss
export const MagicLinkEmail = ({ magicLinkUrl, identifier }: Props) => {
    return (
        <Html>
            <Head />
            <Preview>Let&apos;s get you signed in</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Section>
                        <Heading style={title}>{APP_TITLE}</Heading>
                        <Text style={text}>Hi, {identifier}</Text>
                        <Text style={text}>
                            You requested a magic link to sign in to {APP_TITLE}.
                            Just click the button below and you&apos;ll be logged in automatically. No password needed!
                        </Text>
                        <Button style={button} href={magicLinkUrl}>
                            Login
                        </Button>
                        <Text style={text}>
                            We use this easy sign-in button so you don&apos;t
                            have to remember or type in yet another password.
                        </Text>
                        <Text style={text}>
                            This link will expire in 15 minutes.
                            If you didn&apos;t request this, you can safely ignore this email.
                        </Text>
                        <Text style={text}>Have a nice day!</Text>
                    </Section>
                    <Hr />
                    <Text style={text}>
                        <Img src='https://authjs.dev/img/providers/keycloak.svg'></Img>
                        If you have questions or need help, don&apos;t hesitate to contact our
                        support team!
                    </Text>
                    <Text style={text}>
                        DEMOCO USA Inc, 4 World Trade Center, 150 Greenwich Street, 62nd Floor,
                        New York, NY 10007, USA
                    </Text>
                </Container>
            </Body>
        </Html>
    );
}

export const renderMagicLinkEmail = ({ magicLinkUrl, identifier }: Props) =>
    render(<MagicLinkEmail magicLinkUrl={magicLinkUrl} identifier={identifier} />);

const main = {
    backgroundColor: "#f6f9fc",
    padding: "10px 0",
};

const container = {
    backgroundColor: "#ffffff",
    border: "1px solid #f0f0f0",
    padding: "45px",
};

const text = {
    fontSize: "16px",
    fontFamily:
        "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
    fontWeight: "300",
    color: "#404040",
    lineHeight: "26px",
};

const title = {
    ...text,
    fontSize: "22px",
    fontWeight: "700",
    lineHeight: "32px",
};

const button = {
    backgroundColor: "#09090b",
    borderRadius: "4px",
    color: "#fafafa",
    fontFamily: "'Open Sans', 'Helvetica Neue', Arial",
    fontSize: "15px",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "block",
    width: "210px",
    padding: "14px 7px",
};

