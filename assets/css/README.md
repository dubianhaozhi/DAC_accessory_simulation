# simulation.cssについて
`css/simulation.css`は`scss/simulation.scss`をコンパイルしたものです。

編集する際は、`scss/simulation.scss`を編集し、コンパイルしてください。\
vscodeを使用している場合は`Live Sass Compiler`という拡張機能を使うと、\
`.vscode/settings.json`に記述してあるコンパイルの設定が読み込まれて、自動でコンパイルされます。

# simulation.css.mapについて
cssとscssの記述をマッピングするためのファイルです。\
`Live Sass Compiler`により自動生成されています。\
chromeのディベロッパーツール使用時、スタイルがscssファイルでどの部分に該当するかがわかるようになります。\
開発者用のファイルなので、サイトの表示には影響を与えません。
