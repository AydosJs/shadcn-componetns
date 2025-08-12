"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useForm } from "react-hook-form";

export default function Home() {
  const [formData, setFormData] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [notifications, setNotifications] = useState(false);
  const [theme, setTheme] = useState("light");

  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      message: "",
      category: "",
      notifications: false,
      theme: "light",
    },
  });

  function onSubmit(values: any) {
    setFormData(JSON.stringify(values, null, 2));
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            shadcn/ui Components
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Interactive showcase of the main shadcn/ui components for your team to explore and test
          </p>
        </div>

        {/* Tabs Navigation */}
        <Tabs defaultValue="basic" className="mb-8">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 gap-2">
            <TabsTrigger value="basic" className="text-xs sm:text-sm">Basic Components</TabsTrigger>
            <TabsTrigger value="form" className="text-xs sm:text-sm">Form Components</TabsTrigger>
            <TabsTrigger value="advanced" className="text-xs sm:text-sm">Advanced Components</TabsTrigger>
          </TabsList>

          {/* Basic Components Tab */}
          <TabsContent value="basic" className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">

              {/* 1. Button Component */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                    <Badge variant="secondary" className="text-xs">1</Badge>
                    Button Component
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm">
                    Various button styles and variants
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Button size="sm" className="text-xs">Default</Button>
                    <Button variant="secondary" size="sm" className="text-xs">Secondary</Button>
                    <Button variant="destructive" size="sm" className="text-xs">Destructive</Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" className="text-xs">Outline</Button>
                    <Button variant="ghost" size="sm" className="text-xs">Ghost</Button>
                    <Button variant="link" size="sm" className="text-xs">Link</Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button size="sm" className="text-xs">Small</Button>
                    <Button size="default" className="text-xs sm:text-sm">Default</Button>
                    <Button size="lg" className="text-sm sm:text-base">Large</Button>
                  </div>
                </CardContent>
              </Card>

              {/* 2. Card Component */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                    <Badge variant="secondary" className="text-xs">2</Badge>
                    Card Component
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm">
                    Content containers with header, body, and footer
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    This card demonstrates the card structure with different sections.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="text-xs">Action</Button>
                </CardFooter>
              </Card>

              {/* 3. Badge Component */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                    <Badge variant="secondary" className="text-xs">3</Badge>
                    Badge Component
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm">
                    Small status indicators and labels
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="text-xs">Default</Badge>
                    <Badge variant="secondary" className="text-xs">Secondary</Badge>
                    <Badge variant="destructive" className="text-xs">Destructive</Badge>
                    <Badge variant="outline" className="text-xs">Outline</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* 4. Tabs Component */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                    <Badge variant="secondary" className="text-xs">4</Badge>
                    Tabs Component
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm">
                    Tabbed navigation interface
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="account" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="account" className="text-xs">Account</TabsTrigger>
                      <TabsTrigger value="password" className="text-xs">Password</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account" className="mt-4">
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        Account settings and preferences.
                      </p>
                    </TabsContent>
                    <TabsContent value="password" className="mt-4">
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        Password and security settings.
                      </p>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Form Components Tab */}
          <TabsContent value="form" className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">

              {/* 5. Input Component */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                    <Badge variant="secondary" className="text-xs">5</Badge>
                    Input Component
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm">
                    Text input fields with different states
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="default-input" className="text-xs sm:text-sm">Default Input</Label>
                    <Input id="default-input" placeholder="Type something..." className="text-xs sm:text-sm" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="disabled-input" className="text-xs sm:text-sm">Disabled Input</Label>
                    <Input id="disabled-input" placeholder="Disabled input" disabled className="text-xs sm:text-sm" />
                  </div>
                </CardContent>
              </Card>

              {/* 6. Textarea Component */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                    <Badge variant="secondary" className="text-xs">6</Badge>
                    Textarea Component
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm">
                    Multi-line text input
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-xs sm:text-sm">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Type your message here..."
                      className="min-h-[80px] sm:min-h-[100px] text-xs sm:text-sm"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* 7. Select Component */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                    <Badge variant="secondary" className="text-xs">7</Badge>
                    Select Component
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm">
                    Dropdown selection component
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Label htmlFor="category" className="text-xs sm:text-sm">Category</Label>
                    <Select onValueChange={setSelectedCategory} value={selectedCategory}>
                      <SelectTrigger className="text-xs sm:text-sm">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="feature" className="text-xs sm:text-sm">Feature Request</SelectItem>
                        <SelectItem value="bug" className="text-xs sm:text-sm">Bug Report</SelectItem>
                        <SelectItem value="question" className="text-xs sm:text-sm">Question</SelectItem>
                        <SelectItem value="other" className="text-xs sm:text-sm">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {selectedCategory && (
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        Selected: {selectedCategory}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* 8. Checkbox Component */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                    <Badge variant="secondary" className="text-xs">8</Badge>
                    Checkbox Component
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm">
                    Single and multiple selection checkboxes
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms" className="text-xs sm:text-sm">Accept terms and conditions</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="newsletter" />
                    <Label htmlFor="newsletter" className="text-xs sm:text-sm">Subscribe to newsletter</Label>
                  </div>
                </CardContent>
              </Card>

              {/* 9. Radio Group Component */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                    <Badge variant="secondary" className="text-xs">9</Badge>
                    Radio Group Component
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm">
                    Single selection radio buttons
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RadioGroup defaultValue="light" onValueChange={setTheme}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="light" id="light" />
                      <Label htmlFor="light" className="text-xs sm:text-sm">Light Theme</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="dark" id="dark" />
                      <Label htmlFor="dark" className="text-xs sm:text-sm">Dark Theme</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="system" id="system" />
                      <Label htmlFor="system" className="text-xs sm:text-sm">System Theme</Label>
                    </div>
                  </RadioGroup>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2">
                    Selected: {theme}
                  </p>
                </CardContent>
              </Card>

              {/* 10. Switch Component */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                    <Badge variant="secondary" className="text-xs">10</Badge>
                    Switch Component
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm">
                    Toggle switches for settings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="notifications" className="text-xs sm:text-sm">Push Notifications</Label>
                    <Switch
                      id="notifications"
                      checked={notifications}
                      onCheckedChange={setNotifications}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="email-notifications" className="text-xs sm:text-sm">Email Notifications</Label>
                    <Switch id="email-notifications" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    Notifications: {notifications ? "On" : "Off"}
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Advanced Components Tab */}
          <TabsContent value="advanced" className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">

              {/* 11. Alert Dialog Component */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                    <Badge variant="secondary" className="text-xs">11</Badge>
                    Alert Dialog Component
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm">
                    Modal dialogs for important actions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive" size="sm" className="text-xs">Delete Account</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="max-w-[90vw] sm:max-w-md">
                      <AlertDialogHeader>
                        <AlertDialogTitle className="text-sm sm:text-base">Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription className="text-xs sm:text-sm">
                          This action cannot be undone. This will permanently delete your account and remove your data from our servers.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel className="text-xs sm:text-sm">Cancel</AlertDialogCancel>
                        <AlertDialogAction className="text-xs sm:text-sm">Continue</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </CardContent>
              </Card>

              {/* 12. Dialog Component */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                    <Badge variant="secondary" className="text-xs">12</Badge>
                    Dialog Component
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm">
                    Modal dialogs for general content
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="text-xs">Open Dialog</Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-[90vw] sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle className="text-sm sm:text-base">Edit Profile</DialogTitle>
                        <DialogDescription className="text-xs sm:text-sm">
                          Make changes to your profile here. Click save when you're done.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2 sm:gap-4">
                          <Label htmlFor="name" className="text-xs sm:text-sm sm:text-right">Name</Label>
                          <Input id="name" value="Pedro Duarte" className="col-span-1 sm:col-span-3 text-xs sm:text-sm" />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2 sm:gap-4">
                          <Label htmlFor="username" className="text-xs sm:text-sm sm:text-right">Username</Label>
                          <Input id="name" value="@peduarte" className="col-span-1 sm:col-span-3 text-xs sm:text-sm" />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit" size="sm" className="text-xs sm:text-sm">Save changes</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>

              {/* 13. Form Component */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                    <Badge variant="secondary" className="text-xs">13</Badge>
                    Form Component
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm">
                    Form handling with react-hook-form
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 sm:space-y-4">
                      <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs sm:text-sm">Username</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter username" {...field} className="text-xs sm:text-sm" />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs sm:text-sm">Email</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter email" type="email" {...field} className="text-xs sm:text-sm" />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <Button type="submit" size="sm" className="text-xs sm:text-sm">Submit Form</Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>

              {/* 14. Label Component */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                    <Badge variant="secondary" className="text-xs">14</Badge>
                    Label Component
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm">
                    Accessible form labels
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Label htmlFor="email-label" className="text-xs sm:text-sm">Email address</Label>
                    <Input id="email-label" type="email" placeholder="m@example.com" className="text-xs sm:text-sm" />
                    <p className="text-xs sm:text-sm text-slate-500">
                      We'll never share your email with anyone else.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Form Results Display */}
        {formData && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Form Submission Result</CardTitle>
              <CardDescription>Data submitted from the form above</CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg overflow-x-auto">
                <code className="text-sm">{formData}</code>
              </pre>
            </CardContent>
          </Card>
        )}

        {/* Footer */}
        <div className="text-center mt-12 text-slate-600 dark:text-slate-300">
          <p>Built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui</p>
        </div>
      </div>
    </div>
  );
}
