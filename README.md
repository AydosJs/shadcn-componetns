# shadcn/ui Components Showcase

This is a comprehensive showcase of shadcn/ui components built with Next.js, TypeScript, and Tailwind CSS. It's designed to help your team explore, test, and understand how to use various shadcn/ui components in real-world scenarios.

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the component showcase.

## 🎯 What's Included

### **14 Core Components** organized in 3 categories:

#### **Basic Components Tab**
1. **Button** - Various styles, variants, and sizes
2. **Card** - Content containers with header, body, and footer
3. **Badge** - Status indicators and labels
4. **Tabs** - Tabbed navigation interface

#### **Form Components Tab**
5. **Input** - Text input fields with different states
6. **Textarea** - Multi-line text input
7. **Select** - Dropdown selection component
8. **Checkbox** - Single and multiple selection
9. **Radio Group** - Single selection radio buttons
10. **Switch** - Toggle switches for settings

#### **Advanced Components Tab**
11. **Alert Dialog** - Modal dialogs for important actions
12. **Dialog** - Modal dialogs for general content
13. **Form** - Form handling with validation (using react-hook-form + zod)
14. **Label** - Accessible form labels

## 🎨 Features

- **Responsive Design** - Optimized for all screen sizes (mobile, tablet, desktop)
- **Interactive Examples** - All components are fully functional and interactive
- **Form Validation** - Working form with Zod schema validation
- **State Management** - Demonstrates React state handling
- **Dark Mode Support** - Components adapt to system theme preferences
- **Hover Effects** - Cards have subtle hover animations
- **Real-time Updates** - Form submissions and selections update in real-time

## 🛠️ Technical Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Form Handling**: react-hook-form + zod validation
- **State Management**: React hooks (useState)
- **Responsive Design**: Tailwind breakpoints (sm:, md:, lg:)

## 📱 Responsive Design

The showcase is built with mobile-first responsive design:

- **Mobile (< 640px)**: Single column layout, smaller text sizes
- **Tablet (640px - 1024px)**: Two-column grid, medium text sizes
- **Desktop (> 1024px)**: Two-column grid, larger text sizes, enhanced spacing

## 🔧 Component Usage Examples

### Button Variants
```tsx
<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
```

### Form with Validation
```tsx
const form = useForm<z.infer<typeof formSchema>>({
  resolver: zodResolver(formSchema),
  defaultValues: {
    username: "",
    email: "",
  },
});
```

### Responsive Grid Layout
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
  {/* Component cards */}
</div>
```

## 🎯 How to Use This Showcase

1. **Explore Components**: Navigate between tabs to see different component categories
2. **Test Interactions**: Click buttons, fill forms, open dialogs, toggle switches
3. **Responsive Testing**: Resize your browser to see mobile/tablet layouts
4. **Code Reference**: Use this as a reference for implementing components in your projects
5. **Copy Examples**: Copy component usage patterns for your own implementations

## 📚 Learning Resources

- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Hook Form](https://react-hook-form.com/)
- [Zod Validation](https://zod.dev/)

## 🚀 Next Steps

After exploring the components:

1. **Install shadcn/ui** in your project: `npx shadcn@latest init`
2. **Add specific components**: `npx shadcn@latest add button card input`
3. **Customize themes** using Tailwind CSS variables
4. **Build your own components** following the same patterns
5. **Implement forms** using react-hook-form + zod

## 🤝 Contributing

Feel free to:
- Add more component examples
- Improve responsive design
- Add new component categories
- Enhance form validation examples
- Add accessibility improvements

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using Next.js, TypeScript, Tailwind CSS, and shadcn/ui**
