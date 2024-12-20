"use client";

import { useTranslations } from "next-intl";
import { z } from "zod";
import { Form } from "../form/form";
import { TextInput } from "../form/text-input/text-input";
import { Button } from "../ui/button/button";
import { ContactFormCode } from "./contact-form-code";

const FORM_SCHEMA = z.object({
    email: z.string().min(1, "Email je povinný").email("Neplatný email"),
    message: z.string().min(1, "Zpráva je povinná"),
    name: z.string().min(1, "Jméno je povinné"),
});

export type ContactFormData = z.infer<typeof FORM_SCHEMA>;

export function ContactForm() {
    const t = useTranslations();

    const handleSubmitForm = async () => {};

    return (
        <Form
            className="grid divide-x divide-primary overflow-y-auto md:max-h-[calc(100vh-var(--header-height)-var(--footer-height)-40px-128px)] xl:grid-cols-2"
            onSubmit={handleSubmitForm}
            options={{
                defaultValues: { email: "", message: "", name: "" },
            }}
            schema={FORM_SCHEMA}
        >
            {({ control, watch }) => (
                <>
                    <div className="mx-auto w-full space-y-6 px-4 pt-14 xl:w-2/3">
                        <TextInput
                            control={control}
                            isRequired
                            label={`${t("ContactPage.form.label.name")}:`}
                            name="name"
                        />
                        <TextInput
                            control={control}
                            isRequired
                            label={`${t("ContactPage.form.label.email")}:`}
                            name="email"
                        />
                        <TextInput
                            control={control}
                            isRequired
                            isTextArea
                            label={`${t("ContactPage.form.label.message")}:`}
                            name="message"
                        />
                        <Button type="submit">
                            {t("ContactPage.form.label.submit")}
                        </Button>
                    </div>
                    <ContactFormCode watch={watch} />
                </>
            )}
        </Form>
    );
}
