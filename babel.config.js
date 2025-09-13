module.exports = function (api) {
    api.cache(true);
    return {
        presets: [
            ["babel-preset-expo", {jsxImportSource: "nativewind"}],
            "nativewind/babel",
        ],
        plugins: [
            [
                "module-resolver",
                {
                    root: ["./"],
                    alias: { "@": "./" },
                    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
                }
            ],
            "expo-router/babel",
            "react-native-reanimated/plugin" // MUST be last
        ],
    };
};