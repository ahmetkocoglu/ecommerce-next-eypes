import AuthLayout from "@/layouts/AuthLayout"
import BaseLayout from "@/layouts/BaseLayout"
import DashboardLayout from "@/layouts/DashboardLayout"

export const Layouts = {
    Auth: AuthLayout,
    Base: BaseLayout,
    Dashboard: DashboardLayout
}

export type LayoutKeys = keyof typeof Layouts