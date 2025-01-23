const config = {
    useTabs: false,
    tabWidth: 4,
    singleQuote: true,
    printWidth: 120,
    trailingComma: 'all',
    bracketSpacing: true,
    bracketSameLine: false,
    semi: true,
    endOfLine: 'crlf',
    plugins: ['prettier-plugin-organize-attributes'],
    attributeGroups: ['$CODE_GUIDE'],
    attributeSort: 'ASC',
};

module.exports = config;
