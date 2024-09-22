<script lang="ts">
  import Accordion from "$lib/components/accordion";
  import Text from "$lib/components/text.svelte";

  const faqs = [
    {
      question: "Do you handle UI/UX designs?",
      answer:
        "Yes, I manage your entire project's lifecyle from plans on paper to deployment. For some more complex projects, I collaborate with trusted professionals to ensure efficient deliveries.",
    },
    {
      question: "How do you communicate with clients?",
      answer: "I communicate with clients via Whatsapp or Discord.",
    },
    {
      question: "I have an agency. Can I outsource work to you?",
      answer: "Absolutely! I welcome collaborations with agencies and other creators.",
    },
    {
      question: "What happens after my project is launched?",
      answer:
        "I'm committed to your long-term success. If it turns out you'll have an ongoing need for more features, we can chat about including maintenance packages, updates, and troubleshooting.",
    },
    {
      question: "What’s the typical project timeline?",
      answer:
        "This depends on the complexity of your project, but I typically work in focused, efficient sprints. After our initial call, I’ll provide a clear timeline so you’ll know exactly what to expect, and I’ll keep you updated as we go.",
    },
    {
      question: "What do I need to provide to get started?",
      answer:
        "Just your vision! Whether you have wireframes, user stories, or just an idea sketched out on a napkin, we can work together to bring it to life. If you have existing designs or systems, we can build from there, or I can start fresh with you.",
    },
  ];
</script>

<section id="faq" class="container my-40 space-y-12">
  <div class="mx-auto flex max-w-screen-sm flex-col items-center gap-2 px-20 text-center">
    <Text label serif>FAQ</Text>
    <Text variant="h2">Questions? Answers.</Text>
  </div>

  <Accordion.Root class="mx-auto w-full max-w-screen-md">
    {#each faqs as faq, idx}
      <Accordion.Item value={`step-${idx}`}>
        <Accordion.Trigger>{faq.question}</Accordion.Trigger>
        <Accordion.Content>{faq.answer}</Accordion.Content>
      </Accordion.Item>
    {/each}
  </Accordion.Root>
</section>
