import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import process from 'node:process'
import { load } from 'js-yaml'

export default defineEventHandler(async () => {
    const resumePath = resolve(process.cwd(), 'assets/resume.yml')
    const resumeContent = readFileSync(resumePath, 'utf8')
    const jsonResume = load(resumeContent)

    return jsonResume
})
