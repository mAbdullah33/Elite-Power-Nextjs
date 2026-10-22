"use client";

import { useHashRouter } from "@/lib/router";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import {
  HomeView,
  AboutView,
  ProductsView,
  ProductDetailView,
  SectorsView,
  SectorDetailView,
  SolutionsView,
  SolutionDetailView,
  NewsView,
  NewsDetailView,
  CareersView,
  ContactView,
  FaqView,
  AdminView,
  NotFoundView,
} from "@/views/Views";

export default function Home() {
  const router = useHashRouter();
  const [view, ...rest] = router.segments;

  let body: React.ReactNode;
  switch (view) {
    case "":
    case undefined:
      body = <HomeView router={router} />;
      break;
    case "about":
      body = <AboutView router={router} />;
      break;
    case "products":
      if (rest.length === 0) body = <ProductsView router={router} />;
      else if (rest.length === 1) body = <ProductDetailView router={router} categorySlug={rest[0]} />;
      else body = <ProductDetailView router={router} categorySlug={rest[0]} childSlug={rest[1]} />;
      break;
    case "sectors":
      if (rest.length === 0) body = <SectorsView router={router} />;
      else body = <SectorDetailView router={router} slug={rest[0]} />;
      break;
    case "solutions":
      if (rest.length === 0) body = <SolutionsView router={router} />;
      else body = <SolutionDetailView router={router} slug={rest[0]} />;
      break;
    case "news":
      if (rest.length === 0) body = <NewsView router={router} />;
      else body = <NewsDetailView router={router} slug={rest[0]} />;
      break;
    case "careers":
      body = <CareersView router={router} />;
      break;
    case "contact":
      body = <ContactView router={router} />;
      break;
    case "faqs":
      body = <FaqView router={router} />;
      break;
    case "admin":
      body = <AdminView router={router} />;
      break;
    default:
      body = <NotFoundView router={router} />;
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header router={router} />
      <main className="flex-1">{body}</main>
      <Footer router={router} />
    </div>
  );
}
