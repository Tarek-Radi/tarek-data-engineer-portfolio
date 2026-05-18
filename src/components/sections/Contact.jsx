import { useState } from 'react';
import { ExternalLink, Github, Linkedin, Mail } from 'lucide-react';
import Reveal from '../Reveal';
import * as S from '../../styles/appStyles';

const iconMap = {
  ExternalLink,
  Github,
  Linkedin,
  Mail,
};

function Contact({ profile, contactCards }) {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState({
    type: 'idle',
    message: '',
  });

  const handleFormChange = ({ target: { name, value } }) => {
    setFormValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!formValues.name.trim() || !formValues.email.trim() || !formValues.message.trim()) {
      setFormStatus({
        type: 'error',
        message: 'Please add your name, email, and a short message so I can respond clearly.',
      });
      return;
    }

    const subject = encodeURIComponent(
      `Portfolio inquiry from ${formValues.name}${formValues.company ? ` | ${formValues.company}` : ''}`,
    );
    const body = encodeURIComponent(
      `Name: ${formValues.name}\nEmail: ${formValues.email}\nCompany: ${
        formValues.company || 'Not provided'
      }\n\nMessage:\n${formValues.message}`,
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setFormStatus({
      type: 'success',
      message: `Your email app should open with a prepared draft. You can also write directly to ${profile.email}.`,
    });
  };

  return (
    <Reveal as={S.Section} id="contact">
      <S.SectionHeader>
        <S.Eyebrow>Contact</S.Eyebrow>
        <S.SectionTitle>Open to data engineering internships, junior roles, and analytics-focused opportunities.</S.SectionTitle>
        <S.SectionDescription>
          The fastest way to evaluate fit is through the featured projects, GitHub repositories, and resume link above.
          I am also happy to discuss Azure, SQL, ETL, warehouse modeling, BI, or ML application work.
        </S.SectionDescription>
      </S.SectionHeader>

      <S.ContactGrid>
        <S.ContactIntroCard>
          <S.ContactTitle>{profile.fullName}</S.ContactTitle>
          <S.ContactText>{profile.role}</S.ContactText>
          <S.ContactText>{profile.availability}</S.ContactText>

          <S.ContactCardGrid>
            {contactCards.map((item) => {
              const Icon = iconMap[item.icon] || Mail;

              return (
                <S.ContactInfoCard
                  key={item.title}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  <S.ContactInfoIcon>
                    <Icon size={18} />
                  </S.ContactInfoIcon>
                  <S.ContactInfoMeta>
                    <span>{item.title}</span>
                    <strong>{item.value}</strong>
                  </S.ContactInfoMeta>
                </S.ContactInfoCard>
              );
            })}
          </S.ContactCardGrid>
        </S.ContactIntroCard>

        <S.ContactFormCard>
          <S.ContactForm onSubmit={handleFormSubmit}>
            <S.FieldGrid>
              <S.Field>
                <S.FieldLabel htmlFor="name">Name</S.FieldLabel>
                <S.FieldInput
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  value={formValues.name}
                  onChange={handleFormChange}
                  required
                />
              </S.Field>
              <S.Field>
                <S.FieldLabel htmlFor="email">Email</S.FieldLabel>
                <S.FieldInput
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="your@email.com"
                  value={formValues.email}
                  onChange={handleFormChange}
                  required
                />
              </S.Field>
            </S.FieldGrid>

            <S.Field>
              <S.FieldLabel htmlFor="company">Company or team</S.FieldLabel>
              <S.FieldInput
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                placeholder="Optional"
                value={formValues.company}
                onChange={handleFormChange}
              />
            </S.Field>

            <S.Field>
              <S.FieldLabel htmlFor="message">Message</S.FieldLabel>
              <S.FieldTextarea
                id="message"
                name="message"
                rows="6"
                placeholder="Tell me about the role, data challenge, or team."
                value={formValues.message}
                onChange={handleFormChange}
                required
              />
            </S.Field>

            <S.PrimaryButton type="submit">
              Open Email Draft
              <S.ArrowIcon size={18} />
            </S.PrimaryButton>

            {formStatus.type !== 'idle' ? (
              <S.FormStatusMessage $type={formStatus.type} role="status" aria-live="polite">
                {formStatus.message}
              </S.FormStatusMessage>
            ) : null}
          </S.ContactForm>
        </S.ContactFormCard>
      </S.ContactGrid>
    </Reveal>
  );
}

export default Contact;
