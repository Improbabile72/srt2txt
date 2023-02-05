/**
 * Fixtures for a valid subtitles file
 */

export const validSubs = `
1
00:00:27,263 --> 00:00:35,263
Season 1 espisode 1

2
00:00:45,064 --> 00:00:46,598
Hope this doesn't
embarrass you Jen,

3
00:00:46,613 --> 00:00:48,733
but I found the best thing to do
with the new employee

4
00:00:48,736 --> 00:00:51,792
is to size them up
with a long hard stare.

5
00:01:09,497 --> 00:01:10,858
- So!
- So.

6
00:01:10,929 --> 00:01:12,182
- First day!
- Yes!

7
00:01:12,206 --> 00:01:13,637
- Scary...?
- Yes...

8
00:01:13,649 --> 00:01:15,944
- Don't be scared!
- Oh, I'm not really scared.

9
00:01:15,981 --> 00:01:16,541
You should be!

10
00:01:16,595 --> 00:01:18,654
- Well I'm a little bit scared.
- What? Don't be!
`;

export const validSubsFile = new File(
  [validSubs],
  "the_it_crowd_s01e01_en.srt",
  {
    type: "text/plain",
    lastModified: 1139019760,
  }
);
