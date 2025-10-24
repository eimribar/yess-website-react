'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { createPortal } from 'react-dom';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { LucideIcon } from 'lucide-react';
import {
    Cloud,
    Linkedin,
    Mail,
    Lightbulb,
} from 'lucide-react';

type LinkItem = {
    title: string;
    href: string;
    icon: LucideIcon;
    description?: string;
};

export function Header() {
    const [open, setOpen] = React.useState(false);
    const scrolled = useScroll(10);

    React.useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    return (
        <header
            className={cn('sticky top-0 z-50 w-full border-b border-transparent', {
                'bg-background/95 supports-[backdrop-filter]:bg-background/50 border-border backdrop-blur-lg':
                    scrolled,
            })}
        >
            <nav className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between px-4">
                <div className="flex items-center gap-5">
                    <Link href="/" className="hover:bg-accent rounded-md p-2">
                        <YessLogo className="h-6" />
                    </Link>
                    <NavigationMenu className="hidden md:flex">
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent">Products</NavigationMenuTrigger>
                                <NavigationMenuContent className="bg-background p-1 pr-1.5">
                                    <ul className="bg-popover grid w-[500px] grid-cols-1 gap-2 rounded-md border p-2 shadow">
                                        {productLinks.map((item, i) => (
                                            <li key={i}>
                                                <ListItem {...item} />
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="p-2">
                                        <p className="text-muted-foreground text-sm">
                                            Interested?{' '}
                                            <Link href="/book-a-demo" className="text-foreground font-medium hover:underline">
                                                Book a demo
                                            </Link>
                                        </p>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuLink className="px-4" asChild>
                                <Link href="/post" className="hover:bg-accent rounded-md p-2">
                                    Blog
                                </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink className="px-4" asChild>
                                <a href="https://trust.yess.ai/" target="_blank" rel="noopener noreferrer" className="hover:bg-accent rounded-md p-2">
                                    Trust Center
                                </a>
                            </NavigationMenuLink>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="hidden items-center gap-2 md:flex">
                    <Button variant="outline" asChild>
                        <Link href="/login">Sign In</Link>
                    </Button>
                    <Button asChild>
                        <Link href="/book-a-demo">Get Started</Link>
                    </Button>
                </div>
                <Button
                    size="icon"
                    variant="outline"
                    onClick={() => setOpen(!open)}
                    className="md:hidden"
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    aria-label="Toggle menu"
                >
                    <MenuToggleIcon open={open} className="size-5" duration={300} />
                </Button>
            </nav>
            <MobileMenu open={open} className="flex flex-col justify-between gap-2 overflow-y-auto">
                <NavigationMenu className="max-w-full">
                    <div className="flex w-full flex-col gap-y-2">
                        <span className="text-sm font-semibold">Products</span>
                        {productLinks.map((link) => (
                            <ListItem key={link.title} {...link} />
                        ))}
                    </div>
                </NavigationMenu>
                <div className="flex flex-col gap-2 pt-4 border-t">
                    <Button variant="outline" className="w-full bg-transparent" asChild>
                        <Link href="/login">Sign In</Link>
                    </Button>
                    <Button className="w-full" asChild>
                        <Link href="/book-a-demo">Get Started</Link>
                    </Button>
                </div>
            </MobileMenu>
        </header>
    );
}

type MobileMenuProps = React.ComponentProps<'div'> & {
    open: boolean;
};

function MobileMenu({ open, children, className, ...props }: MobileMenuProps) {
    if (!open || typeof window === 'undefined') return null;

    return createPortal(
        <div
            id="mobile-menu"
            className={cn(
                'bg-background/95 supports-[backdrop-filter]:bg-background/50 backdrop-blur-lg',
                'fixed top-14 right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-y md:hidden',
            )}
        >
            <div
                data-slot={open ? 'open' : 'closed'}
                className={cn(
                    'data-[slot=open]:animate-in data-[slot=open]:zoom-in-97 ease-out',
                    'size-full p-4',
                    className,
                )}
                {...props}
            >
                {children}
            </div>
        </div>,
        document.body,
    );
}

function ListItem({
    title,
    description,
    icon: Icon,
    className,
    href,
    ...props
}: React.ComponentProps<typeof NavigationMenuLink> & LinkItem) {
    return (
        <NavigationMenuLink
            className={cn(
                'w-full flex flex-row gap-x-2 data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent',
                'data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground',
                'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                'rounded-sm p-2',
                className
            )}
            {...props}
            asChild
        >
            <Link href={href}>
                <div className="bg-background/40 flex aspect-square size-12 items-center justify-center rounded-md border shadow-sm">
                    <Icon className="text-foreground size-5" />
                </div>
                <div className="flex flex-col items-start justify-center">
                    <span className="font-medium">{title}</span>
                    {description && (
                        <span className="text-muted-foreground text-xs">{description}</span>
                    )}
                </div>
            </Link>
        </NavigationMenuLink>
    );
}

const productLinks: LinkItem[] = [
    {
        title: 'Salesforce AI Agent',
        href: '/products/salesforce-ai-agent',
        description: 'Automate your CRM with AI',
        icon: Cloud,
    },
    {
        title: 'LinkedIn AI Agent',
        href: '/products/linkedin-ai-agent',
        description: 'Scale your outreach on LinkedIn',
        icon: Linkedin,
    },
    {
        title: 'Executive Outreach Agent',
        href: '/products/executive-outreach-agent',
        description: 'Orchestrate multi-threaded outreach',
        icon: Mail,
    },
    {
        title: 'Lead Recommendation Agent',
        href: '/products/lead-recommendation-agent',
        description: 'AI-powered lead intelligence',
        icon: Lightbulb,
    },
];

function useScroll(threshold: number) {
    const [scrolled, setScrolled] = React.useState(false);

    const onScroll = React.useCallback(() => {
        setScrolled(window.scrollY > threshold);
    }, [threshold]);

    React.useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [onScroll]);

    React.useEffect(() => {
        onScroll();
    }, [onScroll]);

    return scrolled;
}

const YessLogo = (props: React.ComponentProps<"svg">) => (
  <svg viewBox="0 0 100 32" fill="currentColor" {...props}>
    <text x="0" y="24" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="currentColor">
      Yess
    </text>
  </svg>
);
