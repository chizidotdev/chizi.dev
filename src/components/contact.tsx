import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Heading } from "@/components/ui/text";

const socialLinks = [
  { title: "X (Twitter)", href: "https://x.com/chizidotdev" },
  { title: "LinkedIn", href: "https://www.linkedin.com/in/chizi-wokoma-1b486a226" },
];

export function Contact({ children }: { children: React.ReactNode }) {
  return (
    <Popover modal>
      <PopoverTrigger className="link w-fit">{children}</PopoverTrigger>
      <PopoverContent align="start" className="space-y-6 text-sm">
        <div>
          <Heading variant="h4">Email</Heading>
          <a target="_blank" href="mailto:chizi@aidmedium.com">
            chizi@aidmedium.com
          </a>
        </div>

        <div className="flex flex-col gap-2">
          {socialLinks.map((link) => (
            <a target="_blank" href={link.href}>
              {link.title}
            </a>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
