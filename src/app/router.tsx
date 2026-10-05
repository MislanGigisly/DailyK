import { createBrowserRouter } from 'react-router'
import { RootLayout } from 'layouts/RootLayout'
import { TodayPage } from 'pages/today/TodayPage'
import { TasksPage } from 'pages/TasksPage'
import { NotFoundPage } from 'pages/NotFoundPage'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: TodayPage },
      { path: 'tasks', Component: TasksPage },
      { path: '*', Component: NotFoundPage },
    ],
  },
])