<h1 align="center">A-RSnippet Theme</h1>

<p align="center">The goal of A-RSnippet theme is to be comprehensive.</p>

<div align="center">
<a href="https://github.com/huyingjie/hexo-theme-A-RSnippet/tree/master" target="_blank"><img src="https://travis-ci.org/huyingjie/hexo-theme-A-RSnippet.svg?branch=master"></a>
<a href="https://discord.gg/CB6CPzq" target="_blank"><img src="https://img.shields.io/discord/405912462031060992.svg"></a>
<a href="http://hexo.io" target="_blank"><img src="https://img.shields.io/badge/hexo-%3E%3D%203.0-blue.svg"></a>
<a href="https://github.com/huyingjie/hexo-theme-A-RSnippet" target="_blank"><img src="https://img.shields.io/badge/Release-v0.1.0-red.svg"></a>
<a href="https://github.com/huyingjie/hexo-theme-A-RSnippet/blob/master/LICENSE" target="_blank"><img src="https://img.shields.io/badge/license-GPL3-pink.svg"></a>
<!-- <a href="" target="_blank"></a>  -->
</div>

<div align="center" style="padding-top:20px">
	<sub>Created and Maintained By <a href="http://yingjiehu.com" target="_blank">Yingjie Hu</a> with ❤️ &nbsp;Follow me on <a href="https://twitter.com/yingjieYJH" target="_blank">Twitter</a>.</sub>
</div>


## Overview

The goal of Hexo A-RSnippet theme is to achieve as many functionalities as possible. There are many features on my todo list. For example, there will be more than one style to show your projects on the portfolio page.

If you like A-RSnippet theme, please star the repo ⭐️ . It is the easiest way to support me.

You can get updated for each new version release if you [subscribe to the newsletter](https://yingjiehu.us17.list-manage.com/subscribe?u=3fe3112157572128dc2da2663&id=dee20b94d7).

## Live Website

![](http://arsnippet.yingjiehu.com/tutorial/A-RSnippet.png)

* [Official Hexo A-RSnippet theme website](http://arsnippet.yingjiehu.com)
* Please fork the repo and add your site here.

## Features

* Bootstrap
* Fully responsive: smartphone, tablet, laptop, to desktop computer
	* Images
	* Tables
	* Responsive YouTube and Vimeo videos
* Comments - Disqus
* Analytics - Google, Baidu Analytics.
* Webmaster verification
	* Google
	* Bing
	* Yandex
* Code Syntax Highlight
* Table of Contents
* Custom Single Page
	* Pages
	* Tags page
	* Project Portfolio page
	* A list to show a specific category or tag for LeetCode problem list
* Support Latex through MathJax
* Cover image for posts and pages
* Sharing - addthis
* Navigation menu
* Social Accounts configuration (more in the future)

## Documentation

Please go to <http://arsnippet.yingjiehu.com/tutorial> for the latest tutorial.

## Installation

1. `cd root_of_site_folder`
2. `git clone https://github.com/huyingjie/hexo-theme-A-RSnippet.git themes/a-rsnippet`
3. Replace `_config.yml` in the root folder of the website with `_config.yml` in the `a-rsnippet` theme folder.

## Update Theme

Steps

1. Execute the following command to update the theme.

	```shell
	cd themes/a-rsnippet
	git pull

	```

2. Compare the `_config` file the theme and your site `_config` file and edit when necessary.
3. Modify the version number in your `_config` file.

## Quick Start

1. Copy the content of `source` folder in the `exampleSite` folder to your `source` folder
2. Create a new post: `hexo new post "post name"`
3. Create a new page: `hexo new page "page name"`
4. Run the website: `hexo server` or `hexo s`

## Code for An Example Website

There is an `exampleSite` folder in the theme folder.

<div class="text-center">
![](exampleSite.png)
</div>

The `scaffolds` folder contains files with empty front-matter of all layouts used on the site.

You can copy the files and folders in the `exampleSite` folder to your root of the website.


## External Libraries Used

* [Font Awesome 4](http://fontawesome.io/icons/)
* [Bootstrap 3](http://getbootstrap.com/docs/3.3/)
* [jQuery 3.2.1](https://jquery.com/)
* [jQuery UI 1.12.1](https://jqueryui.com/)
* [Highlight.js](https://highlightjs.org/)



## Customize the Theme

**Every time you change something in the `_config` file, run `hexo s` again.**

**Every time you change something in the `source` folder, run `hexo g && hexo s`.**

**Please try not editing code in the theme as hard as you can.**


Replacing the theme folder is the only way to update any Hexo theme. If you edit any file in the theme folder, it will not be easy for you to update A-RSnippet theme in the future.

If you want to customize the theme, please try using following methods. There is an example site in the theme folder.

1. Use external libraries included in the theme.

	* Use HTML and CSS to add Bootstrap style directly to the posts. MarkDown does not support adding classes.

		* [Bootstrap component](https://getbootstrap.com/docs/3.3/components/)
		* [Colors](https://v4-alpha.getbootstrap.com/utilities/colors/)

	* Use [Font Awesome 4](http://fontawesome.io/icons/) to add icons in the posts

1. Add additional JavaScript and CSS to the `arsnippet.css` and `arsnippet.js` respectively. Their positions are as follows:

	```
	your_site_folder
	| -- source
	| -- css
         | -- arsnippet.css
	| -- js
         | -- arsnippet.js
	```
	You can see the example in the `exampleSite` folder.

2. Add additional images

	1. Create a folder inside the `source` folder
	2. Add any image file inside the folder

		Example:

		```
		your_site_folder
       | -- source
             | -- img
                  | -- cover-image.png
		```
		The same logic can be applied to most types of files.

		**For HTML files**, an additional step should be done: add the filenames in `skip_render:` in the `_config` file.

	3. Access the files using `/folder_name/filename.extension`, such as `/img/cover-image.png`

		The first `/` is required because it represents the root path of the site.

<a id="Help-Wanted"></a>
## Contribution

Thank you for [all contributors](https://github.com/huyingjie/hexo-theme-A-RSnippet/graphs/contributors). Without your help, everything cannot move fast, smooth, and easy.

There are several ways you can help:

1. Star [A-RSnippet GitHub Repo](https://github.com/huyingjie/hexo-theme-A-RSnippet)
1. Submit your custom layout

	Example:

	* project portfolio
	* category
	* tag

	Please put CSS and JS into your layout ejs files.

	Please use the filename format `categoryLayout-name`.

	Assuming I want to create a post layout with the name `elegant`. The filename for the ejs file is `post-elegant.ejs`.

	`categoryLayout` can be one of the following:

	* index
	* post
	* page
	* tag
	* category
	* poem
	* portfolio

2. Fix any typo and grammar error

	My native language is Chinese, not English. Please help.
3. Report issue
4. Help people on the [forum](https://arsnippet.freeflarum.com/) and [Discord](https://discord.gg/CB6CPzq)

## Thanks

The theme cannot exist without reference to other themes.

* [Anisina theme](https://github.com/Haojen/hexo-theme-Anisina) which is from [Hux theme](https://github.com/Kaijun/hexo-theme-huxblog) : The design is beautiful. A-RSnippet theme used its design.
* [NexT theme](https://github.com/iissnan/hexo-theme-next) and Landscape theme: When I don't know how to achieve some functionality, I will search source code for both themes. They are awesome.
* [184 themes on the official Hexo website](https://hexo.io/themes/). I spent around 12 hours on reading read all themes and wrote down which feature I wanted to add in the future.

## Getting Help

There are two main places to get help with A-RSnippet theme:

1. [forum](https://arsnippet.freeflarum.com/)
2. [Discord](https://discord.gg/CB6CPzq)

Except for a private channel on Discord, please use English only.

If you want to use languages other than English, please use the following format:

[your language in English] xxxx
[English] yyy

Example:

[Chinese] 除了一个Discord私人频道(你可以通过Patreon加入), 在论坛和Discord里发言只允许使用英文.

[English] Except a private Discord channel (you can join in via [Patreon](https://www.patreon.com/arsnippet)), all discussions on the forum and Discord must use English only.

## Learning A-RSnippet Theme

* [Tutorial](http://arsnippet.yingjiehu.com/tutorial)
* Future: Youtube Channel

## Style Test Reference for Each Layout
* post Layout & LeetCode Layout
	* [Elements](/elements)

		heading, paragraph, link blockquote, list, form, table, abbr, acronym, sub, sup, image, Math formula, video (YouTube, Vimeo), jsfiddle, gist
	* [Long title](/long-title)
	* [中文简体测试 | Chinese (Simplified) Test](/chinese-simplified-test)
	* [中文繁體測試 | Chinese (Traditional) Test](/chinese-traditional-test)
	* [日本語テスト | Japanese Test](/japanese-test)
	* Cover image
		* [Default cover image](/chinese-simplified-test)
		* [Custom cover image](/elements/)
	* [the number on Table of Contents disabled](/chinese-traditional-test/)
	* Comments
		* [enable](/chinese-simplified-test)
		* [disable](/long-title/)
	* [LeetCode](/000-Two-Sum/)
* [page Layout](/support/)
* [tag Layout](/tags)
* [archive Layout](/archives)
* poem Layout
	* comments
		* [with comments](/chinese-poem-test/)
		* [without comments](/japanese-poem-test/)
	* [Chinese Poem](/chinese-poem-test)
	* [Japanese Poem](/japanese-poem-test)
	* [Poem Background Image with specified max width](/poem-background-img-test)
* [portolio-slim Layout](/portfolio-slim)
* [list-category-leetcode Layout](/leetcode-category/)
* [list-tag-leetcode Layout](/leetcode-tag/)
* [404 Layout](/404)

## Reporting Issues

* [GitHub issue](https://github.com/huyingjie/hexo-theme-A-RSnippet/issues)

	This is the only method to report issues. Please go to [forum](https://arsnippet.freeflarum.com/) or [Discord](https://discord.gg/CB6CPzq) to seek for help except issues and feature request.

<a id="donation"></a>

## Donate & Support

**Thank you for choosing A-RSnippet theme.**

Before creating the A-RSnippet theme, I was angry that  themes were not easy to modify and source code was hard to understand.

Now I will not do it anymore. I spent several days to finish the first version. Writing documentation required more days. It taught me that every theme requires a big amount of time to complete and every authors' effort should be respected.

**Simplicity does not mean easy or not complicated.**

[NexT theme](https://github.com/iissnan/hexo-theme-next) seems to conform to minimalism. It has lots of functionalities and customization. It is not easy.

The goal of the theme is to contain as many features as possible. Hence, this is not a simple theme. For example, there will be more than one layout to present project portfolio. Please submit your layout if it is different from mine. There are more features on the way. It will take me a lot of time.

If you like A-RSnippet theme and/or appreciate my time dedicated to the theme, please give a tip to support the development of the theme.

There are four ways:

1. Star the [repo](https://github.com/huyingjie/hexo-theme-A-RSnippet/).
2. [Patreon (recurring, monthly)](https://www.patreon.com/arsnippet)

	GitHub issue section is for issues or future features only. All seek-for-help activity should take place in the [forum](https://arsnippet.freeflarum.com/) or [Discord](https://discord.gg/CB6CPzq).

	* For people who don't donate through Patreon:

		If you ask a question via [Discord](https://discord.gg/CB6CPzq), you must use English and write a post in English in the [forum](https://arsnippet.freeflarum.com/) to show how you solve the problem. You must send me the link to the post. Otherwise, I will not answer your question(s) in the future.

	* For people who donate through Patreon:

		You will automatically join in a private Discord chatroom. You can ask me any question there.

		There are some benefits:

		1. You can suggest any feature you want. I will create a poll of a list of features to be developed after each release. The polls are shown only to you. The top items will be taken care of first.
		2. You can ask me questions in Chinese or English in the private channel on [Discord](https://discord.gg/CB6CPzq).
		3. You will not be obliged to write a post in English in the [forum](https://arsnippet.freeflarum.com/). I will do it for you.

3. [itch (one-time)](https://huyingjie.itch.io/give-a-tip-hexo-a-rsnippet)
4. [Gumroad (one-time)](https://gumroad.com/l/bsdZQ)

## Translation

Adding new features, fixing bugs, answering questions in the [forum](https://arsnippet.freeflarum.com/) and [Discord](https://discord.gg/CB6CPzq) will take me an enormous amount of time. Hence, I decided to give up maintaining Chinese documentation. If you want to translate it into other languages, please feel free to do it. You can add a link here after completion.

## Internationalization

* [en](https://github.com/huyingjie/hexo-theme-A-RSnippet/blob/master/languages/en.yml)
* [zh-Hans](https://github.com/huyingjie/hexo-theme-A-RSnippet/blob/master/languages/zh-Hans.yml)

## License

[GNU General Public License v3.0](https://github.com/huyingjie/hexo-theme-A-RSnippet/blob/master/LICENSE)