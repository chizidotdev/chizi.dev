import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Heading } from "@/components/ui/text";
import { siteConfig } from "@/lib/config";

const socialLinks = [
  { title: "X (Twitter)", href: siteConfig.links.twitter },
  // { title: "LinkedIn", href: siteConfig.links.linkedIn },
  { title: "Github", href: siteConfig.links.github },
];

export function Contact({ children }: { children: React.ReactNode }) {
  return (
    <Popover modal>
      <PopoverTrigger className="link w-fit">{children}</PopoverTrigger>
      <PopoverContent collisionPadding={16} className="space-y-8 text-sm">
        <div className="flex flex-col gap-1">
          <Heading variant="h4">Email</Heading>
          <a target="_blank" href="mailto:hello@chizi.dev" className="link">
            hello@chizi.dev
          </a>
        </div>

        <div className="flex flex-col gap-1.5">
          {socialLinks.map((link) => (
            <a key={link.title} target="_blank" href={link.href} className="link">
              {link.title}
            </a>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
