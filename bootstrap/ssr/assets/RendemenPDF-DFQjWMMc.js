import { jsx, jsxs } from "react/jsx-runtime";
import "react";
import { Document, Page, StyleSheet, View, Image, Text } from "@react-pdf/renderer";
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
    padding: 32,
    // p-8
    fontSize: 12,
    fontFamily: "Helvetica"
  },
  container: {
    backgroundColor: "#ffffff",
    padding: 32,
    // p-8
    borderRadius: 12
    // rounded-lg
  },
  logoWrapper: {
    alignItems: "center",
    marginBottom: 24
    // mb-6
  },
  logo: {
    height: 80,
    // h-20
    objectFit: "contain"
  },
  title: {
    fontSize: 16,
    // text-lg
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 4
  },
  subtitle: {
    fontSize: 10,
    // text-sm
    color: "#71717a",
    // text-zinc-500
    textAlign: "center",
    marginBottom: 32
    // mb-6
  },
  section: {
    gap: 8
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12
    // mb-3
  },
  label: {
    fontSize: 10,
    color: "#71717a"
    // text-sm text-zinc-500
  },
  value: {
    fontSize: 12,
    // text-base
    fontWeight: "bold",
    backgroundColor: "#f4f4f5",
    // bg-zinc-100
    paddingVertical: 6,
    // py-2
    paddingHorizontal: 16,
    // px-4
    borderRadius: 8
    // rounded-lg
  }
});
const RendemenPDF = ({ name, date, jenis, sg, sc }) => /* @__PURE__ */ jsx(Document, { children: /* @__PURE__ */ jsx(Page, { size: "A5", style: styles.page, children: /* @__PURE__ */ jsxs(View, { style: styles.container, children: [
  /* @__PURE__ */ jsx(View, { style: styles.logoWrapper, children: /* @__PURE__ */ jsx(Image, { src: "/img/logo.png", style: styles.logo }) }),
  /* @__PURE__ */ jsx(Text, { style: styles.title, children: "Hasil Perhitungan Rendemen Singkong" }),
  /* @__PURE__ */ jsxs(Text, { style: styles.subtitle, children: [
    "Detail informasi perhitungan rendemen singkong",
    "\n",
    "Menggunakan Website DESCAS oleh Wadjah Inovasi Indonesia"
  ] }),
  /* @__PURE__ */ jsxs(View, { style: styles.section, children: [
    /* @__PURE__ */ jsxs(View, { style: styles.row, children: [
      /* @__PURE__ */ jsx(Text, { style: styles.label, children: "Nama" }),
      /* @__PURE__ */ jsx(Text, { style: styles.value, children: name })
    ] }),
    /* @__PURE__ */ jsxs(View, { style: styles.row, children: [
      /* @__PURE__ */ jsx(Text, { style: styles.label, children: "Tanggal" }),
      /* @__PURE__ */ jsx(Text, { style: styles.value, children: date })
    ] }),
    /* @__PURE__ */ jsxs(View, { style: styles.row, children: [
      /* @__PURE__ */ jsx(Text, { style: styles.label, children: "Jenis Singkong" }),
      /* @__PURE__ */ jsx(Text, { style: styles.value, children: jenis })
    ] }),
    /* @__PURE__ */ jsxs(View, { style: styles.row, children: [
      /* @__PURE__ */ jsx(Text, { style: styles.label, children: "SG (Specific Gravity)" }),
      /* @__PURE__ */ jsx(Text, { style: styles.value, children: sg })
    ] }),
    /* @__PURE__ */ jsxs(View, { style: styles.row, children: [
      /* @__PURE__ */ jsx(Text, { style: styles.label, children: "SC (Starch Content)" }),
      /* @__PURE__ */ jsxs(Text, { style: styles.value, children: [
        sc,
        "%"
      ] })
    ] })
  ] })
] }) }) });
export {
  RendemenPDF as default
};
