import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { Mail, Twitter } from "lucide-react"
import { handleMailClick } from "@/app/page"

export function SiteHeader() {

  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={handleMailClick}>
                <Mail
                  className="h-[1.5rem] w-[1.3rem]"
                />
              </Button>
              <a
                href="https://x.com/MaxiLong1234" // 替换为你的 Twitter 主页链接
                target="_blank" // 在新标签页中打开
                rel="noopener noreferrer" // 安全性增强
              >
                <Button variant="ghost" size="icon">
                  <Twitter
                    className="h-[1.5rem] w-[1.3rem]"
                  />
                </Button>
              </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
