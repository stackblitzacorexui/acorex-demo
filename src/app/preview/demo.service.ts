import { AXToastService } from '@acorex/components';
import { AXObjectUtil } from '@acorex/core';
import { Injectable } from '@angular/core';
import { take } from 'lodash-es';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import * as Countries from "../../assets/data/Countries_by_continent.json"

@Injectable({ providedIn: 'root' })
export class DemoService {

    /**
     *
     */
    constructor(
        private toast: AXToastService,
    ) {

    }
    notify(content: string) {
        this.toast.show({
            title: 'Example',
            type: 'info',
            content,
            timeOut: 2000
        });
    }

    getButtonLooks(): any[] {
        return [
            {
                text: 'Normal',
                id: ''
            },
            {
                text: 'Outline',
                id: 'outline'
            },
            {
                text: 'TwoTone',
                id: 'twotone'
            },
            {
                text: 'Blank',
                id: 'blank'
            },
            {
                text: 'Link',
                id: 'link'
            }
        ]
    }

    getColorTypes(): any[] {
        return [
            {
                text: "Primary",
                id: 'primary'
            },
            {
                text: "Secondary",
                id: 'secondary'
            },
            {
                text: "Success",
                id: 'success'
            },
            {
                text: "Warning",
                id: 'warning'
            },
            {
                text: "Danger",
                id: 'danger'
            },
            {
                text: "Info",
                id: 'info'
            },
            {
                text: "Light",
                id: 'light'
            },
            {
                text: "Dark",
                id: 'dark'
            }
        ]
    }

    getSelectionTypes(): any[] {
        return [
            {
                text: "Single",
                id: 'single'
            },
            {
                text: "Multiple",
                id: 'multiple'
            },
            {
                text: "None",
                id: ''
            },

        ]
    }


    getCalendarDepths(): any[] {
        return [
            {
                text: "Days",
                id: 'days'
            },
            {
                text: "Months",
                id: 'months'
            },
            {
                text: "Years",
                id: 'years'
            }
        ]
    }

    generateLoremIpsum(): string {
        const full = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id diam vel quam elementum pulvinar etiam non quam lacus. At varius vel pharetra vel turpis nunc eget. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Ornare arcu odio ut sem nulla pharetra diam. Vitae justo eget magna fermentum iaculis eu. Vitae auctor eu augue ut lectus. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam. Leo in vitae turpis massa sed elementum tempus. Diam ut venenatis tellus in metus vulputate eu. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Euismod nisi porta lorem mollis. Nulla facilisi morbi tempus iaculis urna id volutpat. Lacus vestibulum sed arcu non odio. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida."
        const items = full.split('.');
        return items[Math.floor(Math.random() * items.length)];
    }

    getPersonNames(): string[] {
        return ['Liam', 'Emma', 'Olivia', 'Noah', 'Ava', 'Oliver', 'Charlotte', 'Elijah', 'William', 'Sophia', 'James', 'Amelia', 'Benjamin', 'Isabella', 'Lucas', 'Mia', 'Henry', 'Evelyn', 'Alexander', 'Harper'];
    }

    generatePersons(): any {
        return [
            {
                id: '62',
                avatar: "https://randomuser.me/api/portraits/men/62.jpg",
                firstName: "Andrew",
                lastName: "Lowe",
                birthDay: "11/1/1982",
                subject: "Back-End Developer",
                about: this.generateLoremIpsum(),
                email: "andrew.lowe@example.com",
                phone: "(806)-922-9934",
                address: "3034 Cherry St",
                instagram: "https://instagram.com",
                twitter: "https://twitter.com",
                facebook: "https://facebook.com"
            },
            {
                id: '76',
                avatar: "https://randomuser.me/api/portraits/women/76.jpg",
                firstName: "Michelle",
                lastName: "Holt",
                birthDay: "7/1/1998",
                subject: "Fron-End Developer",
                about: this.generateLoremIpsum(),
                email: "michelle.holt@example.com",
                phone: "(014)-382-8070",
                address: "3453 Ash Dr",
                instagram: "https://instagram.com",
                twitter: "https://twitter.com",
                facebook: "https://facebook.com"
            },
            {
                id: '0',
                avatar: "https://randomuser.me/api/portraits/women/0.jpg",
                firstName: "Monica",
                lastName: "Young",
                birthDay: "8/5/1962",
                subject: "Graphic Designer",
                about: this.generateLoremIpsum(),
                email: "monica.young@example.com",
                phone: "(457)-798-1631",
                address: "3453 Ash Dr",
                instagram: "https://instagram.com",
                twitter: "https://twitter.com",
                facebook: "https://facebook.com"
            },
            {
                id: '29',
                avatar: "https://randomuser.me/api/portraits/men/29.jpg",
                firstName: "Roland",
                lastName: "Hale",
                birthDay: "3/5/1971",
                subject: "CEO Manager",
                about: this.generateLoremIpsum(),
                email: "roland.hale@example.com",
                phone: "(872)-036-0555",
                address: "8683 Lakeview St",
                instagram: "https://instagram.com",
                twitter: "https://twitter.com",
                facebook: "https://facebook.com"
            },
        ]
    }

    generateBooks() {
        return [
            {
                "isbn": "9781593279509",
                "title": "Eloquent JavaScript, Third Edition",
                "subtitle": "A Modern Introduction to Programming",
                "author": "Marijn Haverbeke",
                "published": "2018-12-04T00:00:00.000Z",
                "publisher": "No Starch Press",
                "pages": 472,
                "description": "JavaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game frameworks like Phaser and Babylon. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
                "website": "http://eloquentjavascript.net/"
            },
            {
                "isbn": "9781491943533",
                "title": "Practical Modern JavaScript",
                "subtitle": "Dive into ES6 and the Future of JavaScript",
                "author": "Nicolás Bevacqua",
                "published": "2017-07-16T00:00:00.000Z",
                "publisher": "O'Reilly Media",
                "pages": 334,
                "description": "To get the most out of modern JavaScript, you need learn the latest features of its parent specification, ECMAScript 6 (ES6). This book provides a highly practical look at ES6, without getting lost in the specification or its implementation details.",
                "website": "https://github.com/mjavascript/practical-modern-javascript"
            },
            {
                "isbn": "9781593277574",
                "title": "Understanding ECMAScript 6",
                "subtitle": "The Definitive Guide for JavaScript Developers",
                "author": "Nicholas C. Zakas",
                "published": "2016-09-03T00:00:00.000Z",
                "publisher": "No Starch Press",
                "pages": 352,
                "description": "ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that ECMAScript 6 brings to JavaScript.",
                "website": "https://leanpub.com/understandinges6/read"
            },
            {
                "isbn": "9781449365035",
                "title": "Speaking JavaScript",
                "subtitle": "An In-Depth Guide for Programmers",
                "author": "Axel Rauschmayer",
                "published": "2014-04-08T00:00:00.000Z",
                "publisher": "O'Reilly Media",
                "pages": 460,
                "description": "Like it or not, JavaScript is everywhere these days -from browser to server to mobile- and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.",
                "website": "http://speakingjs.com/"
            },
            {
                "isbn": "9781449331818",
                "title": "Learning JavaScript Design Patterns",
                "subtitle": "A JavaScript and jQuery Developer's Guide",
                "author": "Addy Osmani",
                "published": "2012-08-30T00:00:00.000Z",
                "publisher": "O'Reilly Media",
                "pages": 254,
                "description": "With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
                "website": "http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/"
            },
            {
                "isbn": "9798602477429",
                "title": "You Don't Know JS Yet",
                "subtitle": "Get Started",
                "author": "Kyle Simpson",
                "published": "2020-01-28T00:00:00.000Z",
                "publisher": "Independently published",
                "pages": 143,
                "description": "The worldwide best selling You Don't Know JS book series is back for a 2nd edition: You Don't Know JS Yet. All 6 books are brand new, rewritten to cover all sides of JS for 2020 and beyond.",
                "website": "https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed/get-started"
            },
            {
                "isbn": "9781484200766",
                "title": "Pro Git",
                "subtitle": "Everything you neeed to know about Git",
                "author": "Scott Chacon and Ben Straub",
                "published": "2014-11-18T00:00:00.000Z",
                "publisher": "Apress; 2nd edition",
                "pages": 458,
                "description": "Pro Git (Second Edition) is your fully-updated guide to Git and its usage in the modern world. Git has come a long way since it was first developed by Linus Torvalds for Linux kernel development. It has taken the open source world by storm since its inception in 2005, and this book teaches you how to use it like a pro.",
                "website": "https://git-scm.com/book/en/v2"
            },
            {
                "isbn": "9781484242216",
                "title": "Rethinking Productivity in Software Engineering",
                "subtitle": "",
                "author": "Caitlin Sadowski, Thomas Zimmermann",
                "published": "2019-05-11T00:00:00.000Z",
                "publisher": "Apress",
                "pages": 310,
                "description": "Get the most out of this foundational reference and improve the productivity of your software teams. This open access book collects the wisdom of the 2017 \"Dagstuhl\" seminar on productivity in software engineering, a meeting of community leaders, who came together with the goal of rethinking traditional definitions and measures of productivity.",
                "website": "https://doi.org/10.1007/978-1-4842-4221-6"
            }
        ]
    }


    getPagedList(opt: { take: number, skip: number }): Observable<any> {
        return of({
            items: new Array(opt.take).fill(0).map((_, i) => ({
                id: opt.skip + i,
                text: `Item ${opt.skip + i}`
            })),
            total: 5000
        }).pipe(delay(1000));
    }

 
    getContinentList(): Observable<string[]> {
        return of((Array.from(Countries).map(c => c.continent)));
     //   return of(_.orderBy(Array.from(Countries).map(c => c.continent)));
    }
    getCountriesList(continent: string): Observable<string[]> {
        return of((Array.from(Countries).filter(c => continent == 'all' || c.continent == continent).map(c => c.country)));
      //  return of(_.orderBy(Array.from(Countries).filter(c => continent == 'all' || c.continent == continent).map(c => c.country)));
    }
    getLooks(): any[] {
        return [
            {
                text: 'Normal',
                id: ''
            },
            {
                text: 'TwoTone',
                id: 'twotone'
            },
            {
                text: 'Outline',
                id: 'outline'
            },
            {
                text: 'Blank',
                id: 'blank'
            }
        ]
    }

}