const project = {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    { name: "company", title: "Company", type: "string" },
    { name: "price_pkr", title: "PKR", type: "number" },
    { name: "price_usd", title: "USD", type: "number" },
    { name: "src", title: "Src", type: "string" },
    { name: "os", title: "Os", type: "string" },
    { name: "dimensions", title: "Dimensions", type: "string" },
    { name: "weight", title: "Weight", type: "string" },
    { name: "sim", title: "Sim", type: "string" },
    { name: "colors", title: "Colors", type: "string" },
    { name: "cpu", title: "Cpu", type: "string" },
    { name: "chipset", title: "Chipset", type: "string" },
    { name: "gpu", title: "Gpu", type: "string" },
    { name: "technology", title: "Technology", type: "string" },
    { name: "size", title: "Size", type: "number" },
    { name: "resolution", title: "Resolution", type: "string" },
    { name: "storage", title: "Storage", type: "string" },
    { name: "memory", title: "Memory", type: "string" },
    { name: "card", title: "Card", type: "string" },
    { name: "maincamera", title: "Maincamera", type: "string" },
    { name: "features", title: "Features", type: "string" },
    { name: "front", title: "Front", type: "string" },
    { name: "gps", title: "Gps", type: "string" },
    { name: "radio", title: "Radio", type: "string" },
    { name: "usb", title: "Usb", type: "string" },
    { name: "data", title: "Data", type: "string" },
    { name: "sensors", title: "Sensors", type: "string" },
    { name: "audio", title: "Audio", type: "string" },
    { name: "torch", title: "Torch", type: "string" },
    { name: "extra", title: "Extra", type: "string" },
    { name: "battery", title: "Battery", type: "number" },
  ],
}
export default project

// const project = {
//   name: "project",
//   title: "Projects",
//   type: "document",
//   fields: [
//     {name: "name",title: "Name",type: "string",},
//     {
//       name: "slug",
//       title: "Slug",
//       type: "slug",
//       options: { source: "name" },
//     },
//     {
//       name: "image",
//       title: "Image",
//       type: "image",
//       options: { hotspot: true },
//       fields: [
//         {
//           name: "alt",
//           title: "Alt",
//           type: "string",
//         },
//       ],
//     },
//     {
//       name: "url",
//       title: "URL",
//       type: "url",
//     },
//     {
//       name: "content",
//       title: "Content",
//       type: "array",
//       of: [{ type: "block" }],
//     },
//   ],
// }

// export default project
