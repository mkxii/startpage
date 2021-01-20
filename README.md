# MkXII's startpage

A simple web browser start page that I quickly put together based
on [this](https://www.reddit.com/r/startpages/comments/kg989b/minimal_gruvboxy_v2/) reddit post and heavily inspired by
Cyberpunk 2077's UI color scheme.

![screenshot](https://github.com/mkxii/startpage/blob/main/img/screenshot.png?raw=true)

## What does it do ?

Groups and displays website links for users who don't want to manage browser bookmarks. Also useful for users who use
multiple browsers and don't want the hassle of migrating bookmarks.

Also acts as a search field, sending your search to Goole.

## How does it work ?

### Install

Download and unzip in any folder on your hard drive, then tell your browser to use index.html as the default start page.
No pre-requisites.

### Usage

* Click on the link to open them.
* Any keypress will be sent to the terminal-like search field at the bottom, press Enter to perform the search.
* Search strings beginning by http:// or https:// will be interpreted as links and pressing Enter will open that link
  instead of a search.
* Pressing Ctrl + Enter will prefix the search string with 'https://' and open it as a link.
* Typing ':string' will open the link with matching data-shortcut attribute (see below)

### Customization

Open index.html with your favorite text editor.

Adding a `<ul>` tag will add a new group, the first `<li>` will be the header, the next ones will be the links.

Each link must have an `<a>` tag, of which the href will be the URL of the link, the inner text will be the
displayed text and the (optional) data-shortcut attribute will be the string you have to type in order to open the link
using the search bar.

### Example

```HTML
<ul>
  <li>Search</li>
  <li><a href="https://www.google.com" data-shortcut="g">Google</a></li>
</ul>
```

Will create a group with header 'Search' and a link pointing to Google.
Typing `:g` then pressing Enter is the same as clicking on the link, because of the data-shortcut.