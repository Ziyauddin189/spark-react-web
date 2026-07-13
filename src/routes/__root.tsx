import { createRootRoute, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <>
      {/* 
        Injecting fonts as requested in the root layout head. 
        Note: Typically in React this would go in index.html, but doing it here 
        ensures they are loaded when the React tree mounts as requested.
      */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link 
        href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" 
        rel="stylesheet" 
      />
      <title>Spark Academy — Setting the standards in education with technology</title>
      <meta name="description" content="Bored of stone-age teaching? Introducing advanced methods." />
      <meta property="og:title" content="Spark Academy — Setting the standards in education with technology" />
      <meta property="og:description" content="Bored of stone-age teaching? Introducing advanced methods." />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      
      <Outlet />
    </>
  ),
})
