This is using a locally built version of a single-spa-angular beta branch. The archive is included, or you can update the package.json to a different version. 

This app uses tabbed navigation to switch between single spa apps. 

# to run

run `ng build` in each sub app (currently navbar and app1)


in root folder run 

`npx serve -l 4200 --single`



Currently the navigation is happening in the navbar app, but the nav app doesn't know how to singleSpaNavigate, ass app1 is registered elsewhere...

