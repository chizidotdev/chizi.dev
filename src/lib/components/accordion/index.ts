import { Accordion as AccordionPrimitive } from "bits-ui";
import Content from "./accordion-content.svelte";
import Item from "./accordion-item.svelte";
import Trigger from "./accordion-trigger.svelte";

const Root = AccordionPrimitive.Root;

const Accordion = Object.assign(Root, {
  Root,
  Content,
  Item,
  Trigger,
});

export default Accordion;
