import type { StructureBuilder } from "sanity/structure";

/* export const structure = (S: StructureBuilder) =>
  S.list()
    .title("Base")
    .items([
      // Site settings sigleton
      S.listItem()
        .title("Site Settings")
        .child(S.document().schemaType("siteSettings").documentId("siteSettings")),

      // Other document types with custom documents filtered
      // ...S.documentTypeListItems().filter(
      //   (listItem) => !["siteSettings", "post"].includes(listItem.getId()!)
      // ),

      S.divider(),
      // S.documentList().title(""),

      // Projects by category list
      S.listItem()
        .title("Posts by category")
        .child(
          S.documentTypeList("category")
            .title("Categories")
            .child((id) =>
              S.documentList()
                .title("Posts by category")
                .filter("_type == 'post' && $id == category._ref")
                .params({ id })
            )
        ),
    ]); */

export const structure = (S: StructureBuilder) =>
  S.list()
    .title("Base")
    .items([
      S.listItem()
        .title("Site Settings")
        .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
      S.divider(),
      S.documentTypeListItem("project").title("Projects"),
      S.divider(),
      S.documentTypeListItem("snippet").title("Snippets"),
      S.documentTypeListItem("tag").title("Tags"),
      S.divider(),
      S.documentTypeListItem("post").title("Posts"),
      S.documentTypeListItem("category").title("Categories"),
    ]);
