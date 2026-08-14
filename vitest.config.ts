// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2026 Nicola Mustone

// This repo's own suite covers the deploy scripts. The console and site run their
// suites from their own workspaces, so keep this runner out of the submodules.
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['tests/**/*.test.ts'],
  },
})
