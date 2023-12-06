import { g, config } from '@grafbase/sdk'
import { SingleGraph } from '@grafbase/sdk/dist/src/grafbase-schema'

// (SingleGraph as any)

const User = (SingleGraph as any).model('User', {
  name: g.string().length({ min: 2, max: 20}),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string().optional(),
  githubUrl: g.url().optional(),
  linkedInUrl: g.url().optional(),
  projects: g.relation(() => Project).list().optional(),
})

const Project = g.model('Project', {
  title: g.string().length({min: 3}),
  description: g.string(),
  image: g.url(),
  liveSiteUrl: g.url(),
  githubUrl: g.url(),
  category: g.string().search(),
  createdBy: g.relation(() => User),
})

export default config({
  schema: g,
})
