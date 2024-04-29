import "@/styles/globals.css";
import React from "react";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import Script from "next/script";
import { StickyButton } from "@/components/Button/stickyButton"
import SocialMediaLinks from "@/components/SocialLink/socialMedia"
import { Nav } from "@/components/Header/Navbar/nav"
import { Link } from "@nextui-org/link";
import clsx from "clsx";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/favicon.ico",
		// shortcut: "/favicon-16x16.png",
		// apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable,
				)}
			>
				<Script id="ThemeSwitch" strategy="beforeInteractive">
					{`if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }`}
				</Script>
				<Providers themeProps={{ attribute: "class" }}>
					<div className="relative flex flex-col h-screen">
						<Nav />
						<main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
							<SocialMediaLinks />
							{children}
							<StickyButton />
						</main>
						<footer className="w-full flex items-center justify-center py-3">
							
							{/* <Link
								isExternal
								className="flex items-center gap-1 text-current"
								href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
								title="nextui.org homepage"
							>
								<span className="text-default-600">Powered by</span>
								<p className="text-primary">NextUI</p>
							</Link> */}
						</footer>
					</div>
				</Providers>
			</body>
		</html>
	);
}
