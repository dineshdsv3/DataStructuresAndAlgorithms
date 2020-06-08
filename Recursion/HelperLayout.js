function outer(input) {
    var outerSpacedVariable = []
    function helper(helperInput) {
        // Modify the outerScopedVariable
        helper(helperInput--)
    }
    helper(input);
    return outerScopedVariable;
}

// Helper function model layout