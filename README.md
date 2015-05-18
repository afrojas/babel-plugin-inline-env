For a little while now Babel (which is great) has had an issue where inlineEnvironmentVariables is being run after deadCodeElimination.

Now that Babel supports plugins, which by default run before all of Babel's internal transformers, we can steal the inlineEnvironmentVariables transformer, recreate it as a plugin, and boom, all fixed.