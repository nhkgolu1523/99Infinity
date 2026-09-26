#!/usr/bin/env python3
"""Generate src/data.ts from the assets actually present on disk,
so every image path in the app is guaranteed to resolve."""
import os, json, re

IMG = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'public', 'assets', 'img')
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'src', 'data.ts')

def ls(d):
    p = os.path.join(IMG, d)
    if not os.path.isdir(p):
        return []
    return sorted(f for f in os.listdir(p) if not f.startswith('.'))

def url(d, f):
    return '/assets/img/%s/%s' % (d, f)

# --- game tiles per provider ---------------------------------------------
games = {}
for prov in sorted(os.listdir(os.path.join(IMG, 'game'))):
    d = 'game/%s' % prov
    files = [f for f in ls(d) if os.path.isfile(os.path.join(IMG, d, f))]
    if files:
        games[prov] = [url(d, f) for f in files]

vendors = [url('vendor', f) for f in ls('vendor')]
categories = [url('category', f) for f in ls('category')]

# --- helper to pick N items from a provider, cycling ---------------------
def pick(prov, n, start=0):
    lst = games.get(prov, [])
    if not lst:
        return []
    return [lst[(start + i) % len(lst)] for i in range(n)]

def interleave(*lists):
    out = []
    for tup in zip(*lists):
        out.extend(tup)
    return out

# --- section definitions (mirror the reference exactly) ------------------
lottery = games.get('lottery', [])[:5]
popular = pick('jili', 10)
mini = interleave(pick('spribe', 5), pick('tb_chess', 5, 100))[:10]
slots = vendors[:10] if vendors else []
fishing = interleave(pick('jili', 5, 60), pick('jdb', 5, 0))[:10]
pvc = vendors[10:13]
casino = vendors[13:19]
sports = pick('inout', 8)

def sec(key, title, icon, items, more=True):
    return {'key': key, 'title': title, 'icon': icon, 'items': items, 'more': more}

sections = [
    sec('lottery', 'Lottery', '/assets/img/title/lottery.png', lottery),
    sec('popular', 'Popular', '/assets/img/title/popular.png', popular),
    sec('mini', 'Mini games', '/assets/img/title/mini-games.png', mini),
    sec('slots', 'Slots', '/assets/img/title/slots.png', slots),
    sec('fishing', 'Fishing', '/assets/img/title/fishing.png', fishing),
    sec('pvc', 'PVC', '/assets/img/title/pvc.png', pvc),
    sec('casino', 'Casino', '/assets/img/title/casino.png', casino),
    sec('sports', 'Sports', '/assets/img/title/sports.png', sports),
]

data = {
    'brand': {
        'name': '99infinity',
        'logo': '/assets/img/brand/logo.png',
        'flag': '/assets/img/brand/flag-en.png',
        'lang': 'EN',
    },
    'banners': [url('banner', f) for f in ls('banner')],
    'notice': (
        '\U0001f389 Welcome to the 99infinity Platform! \U0001f389 Enjoy an exciting gaming '
        'experience with a wide selection of popular games. \U0001f3ae\U0001f525 '
        '\U0001f4a5 New players are welcome to register, explore the platform, and join the fun. '
        'Thank you for choosing 99infinity We wish you a great gaming experience! \u2b50'
    ),
    'activityCards': [
        {
            'title': 'Your Daily Bonus Awaits',
            'desc': 'Log in today and claim free rewards instantly.',
            'art': '/assets/img/activity/bonus.png',
            'href': '/daily-reward',
        },
        {
            'title': 'Spin for Luck',
            'desc': 'One spin could unlock your next big win.',
            'art': '/assets/img/activity/wheel.png',
            'href': '/spin',
        },
    ],
    'topGames': [
        {'cover': '/assets/img/top/ludo.jpg', 'crown': '/assets/img/ui/crown-1.png'},
        {'cover': '/assets/img/top/chicken.png', 'crown': '/assets/img/ui/crown-2.png'},
        {'cover': '/assets/img/top/fruit-slasher.jpg', 'crown': '/assets/img/ui/crown-3.png'},
        {'cover': pick('tb_chess', 1, 4)[0] if pick('tb_chess', 1, 4) else '', 'rank': 'NO4'},
        {'cover': pick('jili', 1, 2)[0] if pick('jili', 1, 2) else '', 'rank': 'NO5'},
        {'cover': pick('jili', 1, 5)[0] if pick('jili', 1, 5) else '', 'rank': 'NO6'},
    ],
    'gameHub': [
        {'name': 'Lottery', 'count': '5 Games', 'art': categories[0] if len(categories) > 0 else ''},
        {'name': 'Popular', 'count': '24 Games', 'art': categories[1] if len(categories) > 1 else ''},
        {'name': 'Mini games', 'count': '147 Games', 'art': categories[2] if len(categories) > 2 else ''},
        {'name': 'Slots', 'count': '11 Games', 'art': categories[3] if len(categories) > 3 else ''},
        {'name': 'Fishing', 'count': '29 Games', 'art': categories[4] if len(categories) > 4 else '', 'small': True},
        {'name': 'PVC', 'count': '3 Games', 'art': categories[5] if len(categories) > 5 else '', 'small': True},
        {'name': 'Casino', 'count': '6 Games', 'art': categories[6] if len(categories) > 6 else '', 'small': True},
        {'name': 'Sports', 'count': '3 Games', 'art': categories[7] if len(categories) > 7 else '', 'small': True},
    ],
    'sections': sections,
    'jackpot': {
        'title': 'Super Jackpot',
        'desc': 'When you win a super jackpot, you will receive additional rewards',
        'cta': 'Join Now',
    },
    'winners': [
        {'cover': games.get('pg', [''])[1] if len(games.get('pg', [])) > 1 else '', 'name': 'Gemstones Gold',
         'amount': '\u20b9102.00', 'nick': 'Mem***DDI', 'avatar': '/assets/img/avatar/avatar-1.png'},
        {'cover': pick('jili', 1, 3)[0] if pick('jili', 1, 3) else '', 'name': 'Lucky Jaguar',
         'amount': '\u20b913.20', 'nick': 'Mem***THS', 'avatar': '/assets/img/avatar/avatar-2.png'},
        {'cover': pick('jili', 1, 1)[0] if pick('jili', 1, 1) else '', 'name': 'Fortune Gems 2',
         'amount': '\u20b9600.00', 'nick': 'Mem***GRV', 'avatar': '/assets/img/avatar/avatar-3.png'},
        {'cover': pick('jili', 1, 4)[0] if pick('jili', 1, 4) else '', 'name': 'Fortune King Jackpot',
         'amount': '\u20b9300.00', 'nick': 'Mem***SGR', 'avatar': '/assets/img/avatar/avatar-4.png'},
        {'cover': games.get('ng', [''])[0] if games.get('ng') else '', 'name': 'Fortune Gems 3',
         'amount': '\u20b918.00', 'nick': 'Mem***GXU', 'avatar': '/assets/img/avatar/avatar-5.png'},
    ],
    'partners': [
        {'src': '/assets/img/partner/cq9.png', 'alt': 'CQ9'},
        {'src': '/assets/img/partner/microgaming.png', 'alt': 'Microgaming'},
        {'src': '/assets/img/partner/jdb.png', 'alt': 'JDB'},
        {'src': '/assets/img/partner/evolution.png', 'alt': 'Evolution'},
        {'src': '/assets/img/partner/jili.png', 'alt': 'JILI'},
        {'src': '/assets/img/partner/choice.png', 'alt': 'Choice Gaming'},
    ],
    'social': [
        {'src': '/assets/img/partner/18plus.png', 'alt': '18+'},
        {'src': '/assets/img/partner/telegram.png', 'alt': 'Telegram'},
        {'src': '/assets/img/partner/whatsapp.png', 'alt': 'WhatsApp'},
    ],
    'footerText': [
        'The 99infinity platform advocates fairness, justice, and openness. We mainly operate fair lottery, '
        'blockchain games, live casinos, and slot machine games.',
        '99infinity works with more than 10,000 online live game dealers and slot games, all of which are '
        'verified fair games.',
        '99infinity supports fast deposit and withdrawal, and looks forward to your visit.',
    ],
    'footerWarning': ['Gambling can be addictive, please play rationally.', '99infinity only accepts customers above the age of 18.'],
    'tabbar': [
        {'key': 'home', 'label': 'Home', 'icon': '/assets/img/tabbar/home.png', 'activeIcon': '/assets/img/tabbar/home-active.png', 'href': '/'},
        {'key': 'activity', 'label': 'Activity', 'icon': '/assets/img/tabbar/activity.png', 'activeIcon': '/assets/img/tabbar/activity.png', 'href': '/activity'},
        {'key': 'center', 'label': 'Get \u20b9500', 'href': '/spin'},
        {'key': 'promotion', 'label': 'Promotion', 'icon': '/assets/img/tabbar/promotion.png', 'activeIcon': '/assets/img/tabbar/promotion.png', 'href': '/promotion'},
        {'key': 'account', 'label': 'Account', 'icon': '/assets/img/tabbar/mine.png', 'activeIcon': '/assets/img/tabbar/mine.png', 'href': '/account'},
    ],
    'messages': [
        {
            'title': 'Welcome to 99infinity',
            'desc': 'Enjoy an exciting gaming experience with a wide selection of popular games. '
                    'New players are welcome to register, explore the platform, and join the fun.',
            'time': '2026-09-14 10:45',
        },
        {
            'title': 'Daily Bonus Awaits',
            'desc': 'Log in today and claim free rewards instantly. Rewards are credited automatically '
                    'to your wallet once the daily check-in is confirmed.',
            'time': '2026-09-12 20:34',
        },
        {
            'title': 'Super Jackpot Event',
            'desc': 'When you win a super jackpot, you will receive additional rewards. Join the event '
                    'and stand a chance to win extra prizes on top of your jackpot payout.',
            'time': '2026-09-11 20:35',
        },
    ],
    'games': games,
}

# --- emit TypeScript -----------------------------------------------------
def ts(v, ind=0):
    sp = '  ' * ind
    if isinstance(v, dict):
        if not v:
            return '{}'
        items = ',\n'.join('%s  %s: %s' % (sp, json.dumps(k), ts(x, ind + 1)) for k, x in v.items())
        return '{\n%s\n%s}' % (items, sp)
    if isinstance(v, list):
        if not v:
            return '[]'
        if all(not isinstance(x, (dict, list)) for x in v):
            return '[' + ', '.join(json.dumps(x, ensure_ascii=False) for x in v) + ']'
        items = ',\n'.join('%s  %s' % (sp, ts(x, ind + 1)) for x in v)
        return '[\n%s\n%s]' % (items, sp)
    return json.dumps(v, ensure_ascii=False)

body = ts(data)
src = (
    '// AUTO-GENERATED from the assets on disk — do not hand-edit paths.\n'
    '// Regenerate with: python3 tools/gen-data.py\n\n'
    'export const site = ' + body + '\n\n'
    'export type Site = typeof site\n'
)
os.makedirs(os.path.dirname(OUT), exist_ok=True)
open(OUT, 'w', encoding='utf-8').write(src)
print('wrote', OUT, len(src), 'bytes')
print('sections:', [(s['title'], len(s['items'])) for s in sections])
print('providers:', {k: len(v) for k, v in games.items()})
print('vendors:', len(vendors), 'categories:', len(categories))
