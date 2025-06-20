---
title: The Apple Code Signing Handbook
date: 2025-06-20T20:53:18.103Z
author: Sravan Karuturi
authorURL: https://www.freecodecamp.org/news/author/sravankaruturi/
originalURL: https://www.freecodecamp.org/news/apple-code-signing-handbook/
posteditor: ""
proofreader: ""
---

In this handbook, I’ll demystify the Apple app code signing process. Apple's ecosystem is powerful, but its distribution mechanisms – with various identifiers, certificates, and profiles – can appear complex. This guide attempts to make that journey more manageable and straightforward for you.

<!-- more -->

Throughout this handbook, you will learn how to:

-   Correctly establish and manage an app's unique identity.
    
-   Understand the roles of different Apple developer certificates and how to create and manage them.
    
-   Differentiate between various types of provisioning profiles and know when to use each one.
    

This guide is geared towards new developers who want to learn how the code signing process works, but it should also be useful experienced developers who want or need to refresh their memory.

### Prerequisites

While there are no hard prerequisites to understanding the certificates, bundles, and provisioning profiles for distributing on Apple platforms, it helps to have an Apple developer account to follow along.

## Table of Contents

-   [App IDs, Bundle IDs – Your App’s Identity][1]
    
-   [Understanding Distribution: A Deep Dive into Certificates][2]
    
-   [Bridge between everything: Provisioning Profiles][3]
    
-   [Device management – Development and Ad Hoc Builds][4]
    
-   [Possibilities: Enabling Capabilities and Services][5]
    
-   [Conclusion][6]
    

## **App IDs, Bundle IDs — Your App’s Identity**

The Bundle ID and the corresponding App ID registered with Apple form the basis of an application’s identity. Establishing these correctly from the beginning is very important, as errors or misconfigurations here can lead to significant complications down the line, particularly once you’ve submitted your app to App Store Connect.

### Understanding `CFBundleIdentifier` (Bundle ID)

#### What is the “Bundle ID”?

Think of the Bundle ID as a unique name or a fingerprint for your app. The `CFBundleIdentifier`, more commonly known as the **Bundle ID**, is a string that uniquely identifies your application.

This identifier is not just a name – it serves multiple crucial purposes.

-   The operating system relies on it to apply specific preferences and settings to an app.
    
-   This is used to launch the application from other apps etc.
    
-   It plays an essential role in the validation of an app's code signature, ensuring the app's integrity and authenticity.
    
-   The Bundle ID defined in an app's Info.plist file must exactly match the Bundle ID registered for the app in App Store Connect for successful submission and distribution.
    

The Bundle ID string must adhere to specific character limitations: it can only contain alphanumeric characters `A-Z, a-z, 0-9`, hyphens `-`, and periods `.`. It's important to note that Bundle IDs are treated as **case-insensitive** by the system.

### How to Choose and Format Your Bundle ID (Reverse-DNS and Best Practices)

Apple highly recommends, and it is standard practice, to use a reverse-DNS (Domain Name System) format for Bundle IDs.

A common example would be `com.yourcompanyname.appname`. This convention leverages the global uniqueness of domain names to help ensure the global uniqueness of Bundle IDs.

If an organization uses its unique domain name (for example, `sravan.gg` becomes `gg.sravan` ) as the prefix, and the app name is unique within that organization, the resulting Bundle ID (for example, `gg.sravan.mycoolapp` ) is highly likely to be unique worldwide.

**Sidenote**: While Xcode won’t stop you from creating something like `com.google.mapping` or something like that even if you don’t work at Google, this will most likely get rejected when it goes through the AppStore review process. This is because this implies ownership of that domain. So, while it’s technically possible when starting out, you shouldn’t use domains that don’t belong to you.

The fundamental nature of the Bundle ID as a unique, system-wide identifier – coupled with its immutability after an app is first uploaded to App Store Connect – means that you should treat its selection with the same seriousness as choosing a **permanent, unchangeable identifier** for a critical entity. A mistake in the Bundle ID after this point can necessitate creating an entirely new app listing on the App Store.

### App IDs in the Apple Developer Portal: Explicit vs. Wildcard

#### Which One Do You Need?

In the Apple Developer Portal, developers register an "App ID." This App ID is a record that links one or more applications from a single development team to specific app services (capabilities) and is used in provisioning profiles. We’ll learn more about this in the following sections.

There are two main types of App IDs:

-   **Explicit App ID:** This type is used for a single application. The Bundle ID specified within an explicit App ID must be an exact match for the CFBundleIdentifier in the app's Info.plist file (for example, `com.mycompany.myapp`). Explicit App IDs are required for apps that use many of Apple's specific services and capabilities, such as In-App Purchases (which are enabled by default for explicit App IDs), Push Notifications, iCloud, HealthKit, and Sign in with Apple.
    
-   **Wildcard App ID:** This type can be used for a set of applications that share a common Bundle ID prefix. It contains an asterisk (\*) as the last part of its Bundle ID string (for example, `com.mycompany.*`). This wildcard App ID would match any app whose Bundle ID starts with `com.mycompany.`, such as [`com.mycompany.app`][7] or `com.mycompany.utility`. But you can’t use wildcard App IDs if the app requires services or capabilities that mandate an explicit App ID.
    

The choice between an explicit and a wildcard App ID has significant implications. The App ID acts as a central registration point, and the capabilities are "enabled" for this registration – more on capabilities later in this handbook.

You can think of an explicit App ID as a specific key designed to unlock extra "keyholes" (capabilities). A wildcard App ID, being more generic, might not fit these extra keyholes. If you choose a wildcard App ID initially for convenience, but you need a feature requiring an explicit App ID (like Push Notifications) later, you’ll be forced to create a new explicit App ID and reconfigure associated settings and provisioning profiles.

So, make sure you carefully consider your current and future app features when selecting an App ID type. The following table provides a quick comparison\*\*.\*\*

My personal recommendation is always go with explicit App Ids unless you need the flexibility of wildcard app ids.

| **Feature** | **Explicit App ID** | **Wildcard App ID** |
| --- | --- | --- |
| **Bundle ID Match** | Exact match (for example, [com.foo.bar][8]) | Suffix match (for example, [com.foo][9].\*) |
| **Use Case** | Single app | Set of apps with similar base ID |
| **Capabilities** | Supports all capabilities | Limited (cannot use services requiring explicit IDs) |
| **Uniqueness** | Globally unique identifier for one specific app | Identifies a group of apps |

### Step-by-Step: How to Register Your App ID in the Apple Developer Portal

To register an App ID, an you’ll need an **Apple Developer Program membership**. Also, the actions must be performed by someone with an Account Holder or Admin role.

The process is as follows:

1.  Sign in to the Apple Developer Portal and navigate to "Certificates, Identifiers & Profiles," then select "Identifiers" from the sidebar.
    
2.  Click the “Add button (+)” to create a new identifier.
    
    ![Picture depicting the Add button](https://cdn.hashnode.com/res/hashnode/image/upload/v1748642247245/a24b527f-e810-4a9c-b75a-dcd3d189b1d1.png)
    
3.  Select "App IDs" from the list of options and click "Continue."
    
    ![851f64f3-e608-4fb7-9f31-bd30adb64beb](https://cdn.hashnode.com/res/hashnode/image/upload/v1748642283885/851f64f3-e608-4fb7-9f31-bd30adb64beb.png)
    
4.  Make sure that the "App" type is selected (it usually is by default) and click "Continue."
    
    ![App type selection](https://cdn.hashnode.com/res/hashnode/image/upload/v1748642318142/a7b28529-bbe6-4240-953e-836de3e948ac.png)
    
5.  Enter a "Description" for the App ID. This is for your reference within the portal (for example, "My very cool App ID").
    
    ![App Id registration screen](https://cdn.hashnode.com/res/hashnode/image/upload/v1748642392862/a5322cf5-3d75-4b0b-93bf-d46dd1ce8afe.png)
    
6.  Choose the "App ID Type": "Explicit" or "Wildcard."
    
7.  For an "Explicit App ID," enter the exact Bundle ID that will be used in your Xcode project (for example, `com.yourcompany.yourapp`). For a "Wildcard App ID," enter a Bundle ID suffix ending with an asterisk (for example, `com.yourcompany.*`).
    
8.  Scroll down to the "Capabilities" section and select the checkboxes for any app services your app will use. Some capabilities might require further configuration at this stage or later. (Again, we’ll cover app capabilities in more detail later on).
    
9.  Click "Continue," review all the details carefully, and then click "Register" to finalize the App ID creation.
    
    ![Confirm the App ID screen](https://cdn.hashnode.com/res/hashnode/image/upload/v1748642432661/2052a435-ed0e-404a-9178-7d6541fc9421.png)
    

### How to Manage Your Bundle ID: Xcode, App Store Connect, and the Point of No Return

The Bundle ID specified in an Xcode project is critical. To set it:

1.  In the Xcode project navigator, select the target for your app.
    
2.  Open the "Signing & Capabilities" tab.
    
3.  Expand the "Signing" section.
    
4.  In the "Bundle Identifier" text field, enter the Bundle ID. This identifier must precisely match the Bundle ID associated with an explicit App ID registered in the Developer Portal, or conform to the pattern of a wildcard App ID if applicable.
    

It's important to understand the difference between the "Bundle ID" (or `CFBundleIdentifier`) in the Xcode project and the "App ID" registered in the Developer Portal. The "App ID" in the developer portal is an entity that _contains_ a “Bundle ID” string (either explicit or wildcard). The string in your Xcode project's "Bundle Identifier" field must match this contained string.

When preparing for distribution via TestFlight or the App Store, you’ll need to create an app record in App Store Connect. The Bundle ID you enter during this app record creation must exactly match the Bundle ID in the Xcode project.

#### A Critical Warning: Immutability After First Upload

This is a point of no return: Once you upload a build of an app to App Store Connect, the Bundle ID for that app record **cannot be changed**.

In addition, after an upload, you can’t delete the associated explicit App ID registered in the Developer Portal. This immutability highlights the need for _careful planning and verification_ of the Bundle ID before any uploads occur.

If you prefer programmatic management or automation, the App Store Connect API provides resources for managing Bundle IDs. You can [read more on that here][10].

## **Understanding Distribution: A Deep Dive into Certificates**

### What are Certificates?

Certificates are digital credentials that verify a **developer's identity** – that is, you – to Apple and, by extension, to the app users.

They are fundamental to Apple's code signing process, which is mandatory for all apps to ensure they originate from a **known source** and have not been tampered with since being signed.

### What is Code Signing: Ensuring Trust and Integrity

Code signing is you as a developer signing the app with your signature. It is the process of attaching a digital signature to an app's code. This signature assures users of two key things:

1.  **Authenticity:** The app was created by an identified Apple developer (an individual or a team).
    
2.  **Integrity:** The app's code has not been altered or corrupted since it was signed by the developer.
    

The process involves using a private key, securely held by the developer (you), to create the signature. The corresponding public key, embedded within the developer's certificate (issued by Apple), is used by the system to verify this signature.

This system of identity verification and integrity checking is crucial. The developer's certificate, issued by Apple as a Certificate Authority (CA), vouches for their identity. The code signing process, using hashing and encryption, ensures that any modification to the code after signing would invalidate the signature.

For app developers, benefits of code signing include removing warnings on macOS for apps distributed outside the Mac App Store, providing a smoother user experience. It is a mandatory requirement for listing applications on any of Apple's App Stores. It also enhances security of the app as it acts as a deterrent against malicious tampering.

### Types of Certificates: Development, Distribution, and Developer ID

Apple provides different types of certificates for various stages of development and methods of distribution. Each of them has a distinct role to play throughout the app development process.

#### 1\. Development Certificates (for example, "Apple Development"):

-   **Purpose:** Used to sign apps during the development phase, allowing them to be installed and run on a limited number of _registered test devices_ and simulators for debugging and testing.
    
-   **Identifies:** Typically identifies an individual developer through their developer ID.
    
-   **Used with:** Development provisioning profiles – more on this later.
    

#### 2\. Distribution Certificates (for example, "Apple Distribution"):

-   **Purpose:** Used to sign apps intended for distribution, either through Ad Hoc methods (to a limited set of _registered testers_) or for submission to the App Store.
    
-   **Identifies:** The development team via the team identifier.
    
-   **Use Cases:**
    
    1.  **App Store:** For signing the final version of an app that will be uploaded to App Store Connect for TestFlight beta testing or release on the App Store (iOS, macOS, tvOS, watchOS). These are used with App Store provisioning profiles – more on this later.
        
    2.  **Ad Hoc:** For signing apps that will be distributed to a _limited number of registered test devices outside of the App Store or TestFlight_. These are used with Ad Hoc provisioning profile. More on this later.
        

#### 3\. Developer ID Certificates (for Mac apps distributed outside the Mac App Store):

-   **Purpose:** Specifically for macOS developers who wish to distribute their applications directly to users (for example, from their own website) rather than through the Mac App Store. Gatekeeper on macOS recognizes apps signed with a Developer ID certificate, assuring users that the app is from a known developer and has not been tampered with.
    
-   **Types:**
    
    1.  **Developer ID Application:** Used to sign the Mac application bundle (.app) itself.
        
    2.  **Developer ID Installer:** Used to sign a Mac Installer Package (.pkg) that contains the signed application.
        
    3.  **Limit:** Developers can create up to five Developer ID Application certificates and up to five Developer ID Installer certificates.
        

The following table summarizes these certificate types:

| **Certificate Type** | **Issued To** | **Primary Purpose** | **Used With Provisioning Profile Type** | **Key Use Cases** |
| --- | --- | --- | --- | --- |
| Apple Development | Individual Dev ID | Develop & debug on registered devices | Development | Xcode builds for local testing, running on personal/team test devices. |
| Apple Distribution | Team ID | Submit app to App Store / Ad Hoc distribution | App Store, Ad Hoc | Final builds for TestFlight, App Store submission, or QA/client Ad Hoc builds. |
| Developer ID Application | Team ID | Sign Mac app for distribution outside Mac App Store | **Developer ID Provisioning** **Profile** if the app utilizes specific capabilities (e.g., Push Notifications, Associated Domains). | Distributing Mac software directly to users (for example, from website). |
| Developer ID Installer | Team ID | Sign Mac Installer Pkg for distribution outside Mac App Store | N/A. (The app inside the package may need a profile). | Distributing Mac software in a .pkg installer directly to users. |
| APNs / Service Keys (.p8) | Team ID | Secure communication with specific Apple services | N/A for app signing | Push Notifications, MusicKit, DeviceCheck and so on. (Token-based authentication) |

![Create a new certificate screen in App Store Connect](https://cdn.hashnode.com/res/hashnode/image/upload/v1748216973656/76df3f64-c84e-4195-a092-37c1143d8b1b.png)

### How to Create an Apple Certificate – An Overview

Here’s a general outline of how you create an Apple Certificate:

-   Generate a Certificate Signing Request (CSR) on your Mac. (Yes you need a mac.)
    
-   You upload this CSR in AppStoreConnect as a part of creating the certificate.
    
-   Download the certificate from AppStoreConnect once it’s issued.
    
-   Install the certificate into your Keychain.
    

Now we’ll go through each step in more detail. This part is very important, since we have to save some of the files generated locally or we lose the ability to transfer these certificates. This would mean revoking and re-issuing certificates (I have done this more times than I’d like to admit).

#### How to Create a Certificate Signing Request (CSR)

A Certificate Signing Request (CSR) is a fancy name for an encrypted block of text containing information about who’s requesting the certificate (like your name and the public key). These are widely used in the cryptography world.

For our purposes, you’ll generate a CSR on your Mac and then submit it to Apple to request a digital certificate. The CSR generation process also creates a new public/private key pair on the Mac – the private key is stored in Keychain Access and is used for the eventual code signing.

To create a CSR using Keychain Access on macOS:

1.  Launch Keychain Access (you can find it at `/Applications/Utilities/` or use spotlight).
    
2.  From the menu bar, choose Keychain Access > Certificate Assistant > Request a Certificate From a Certificate Authority.... (Here the Certificate Authority would be Apple).
    
3.  In the dialog, enter your email address and a common name for the key (for example, "My Mac Key" or "\[Your Name\] Dev Key"). This name is primarily for your identification in the Keychain.
    
4.  Leave the "CA Email Address" field empty – we won’t email it to the Certificate Authority (Apple).
    
5.  Select the "Saved to disk" option and click "Continue".
    
6.  Save the file, which will have a .certSigningRequest extension. The corresponding private key is now stored in the login keychain. **This private key is irreplaceable by Apple and you must store it yourself.**
    

![Dialog for the CSR creation](https://cdn.hashnode.com/res/hashnode/image/upload/v1748288861336/50f20da3-69d9-476d-97e7-331f9b9b5c76.png)

#### How to Generate and Download Your Apple Certificates

Once you’ve created a CSR, you can request a certificate from the Apple Developer Portal:

1.  Navigate to "Certificates, Identifiers & Profiles" and select "Certificates".
    
2.  Click the add button (+).
    
3.  Choose the desired certificate type
    
4.  Follow the prompts, and when asked, upload the .certSigningRequest file generated earlier.
    
5.  After Apple processes the request, the certificate will be available for download as a .cer file.
    
    ![Prompt to upload the CSR after selecting the type of certificate](https://cdn.hashnode.com/res/hashnode/image/upload/v1748289386364/78f46b4e-b232-4484-98c2-dcb75120fd61.png)
    

To install the certificate, double-click the downloaded .cer file. It will be added to the Keychain Access application – usually appearing in the "login" keychain under the "My Certificates" category, where it should be paired with the private key generated during the CSR generation process earlier.

You can see my certificate and private key in the image below for reference.

![An example of how your certificate and the private key will look like in the keychain](https://cdn.hashnode.com/res/hashnode/image/upload/v1748289120657/38f711dd-887a-4fae-844d-e389c65234cf.png)

To recap, the CSR certifies that you generated the request from your mac. The certificate certifies that Apple (in this case, an intermediary like the "Apple Worldwide Developer Relations Certification Authority") confirms that they verified the CSR and that it is indeed you who will sign with the certificate (`.cer`) file.

This is enforced by only you having access to the private key – if you lose it, you cannot use this certificate anymore.

So, if you use this certificate (and the private key) to sign an app, the app store / operating system knows that it is you for sure since Apple confirmed it.

### How to Store Your Keys: What are .p12 Files?

As I mentioned in the previous section, to code sign an app you need your certificate (containing the public key) and the corresponding private key. This is created along with the CSR, and you can find it in the `Keychain Access` app.

We call the combination of the certificate and the private key a digital identity. This proves your identity when you sign an app with them.

#### .p12 Files (Personal Information Exchange):

A .p12 file is a password-protected archive format used to bundle a certificate along with its private key. Its primary purposes are:

-   Backing up the digital identity in case you lose access to your Mac.
    
-   Transferring the digital identity to another Mac (for example, for another team member or a new development machine).
    
-   Providing the identity to automated build systems or third-party build services.
    

Historically, I have stored the .p12 file on a shared drive with my team and shared the password to it verbally – you can also store it in a local backup disk.

Great. So how do you create one?

#### To export a .p12 file from Keychain Access:

1.  Open Keychain Access, select the "login" keychain, and go to the "My Certificates" category.
    
2.  Locate the desired certificate. It should have an expandable disclosure triangle indicating an associated private key (look at the image of my certificate above).
    
3.  Select _both_ the certificate and its private key (or right-click the certificate and choose "Export").
    
4.  Right-click and choose "Export \[X\] items...".
    
5.  In the save dialog, choose the "Personal Information Exchange (.p12)" file format.
    
6.  Assign a strong password to protect the .p12 file. This password will be required when importing the file elsewhere. It is crucial for security.
    
7.  Save the file to a secure location.
    
    ![Image of exporting my certificate and private key as a .p12 file](https://cdn.hashnode.com/res/hashnode/image/upload/v1748297124625/f9d2cfe0-3538-405e-8fb0-af08276c4326.png)
    

## **Bridge Between Everything: Provisioning Profiles**

Provisioning profiles are the final link between an App ID, developer certificates, and, in some cases, a list of specific test devices. They act as a permission slip, authorizing an app signed with a particular certificate to be installed and run either on designated devices or to be submitted to the App Store.

### What Exactly is a Provisioning Profile?

A provisioning profile is a `.mobileprovision` (for iOS / VisionOS) or `.provisionprofile` (for macOS) file that holds several key pieces of information:

-   **The App ID:** Specifies which application (or set of applications, if using a wildcard App ID) the profile applies to.
    
-   **Certificates:** Contains one or more developer or distribution certificates that can be used to sign the app.
    
-   **Device UDIDs (for Development and Ad Hoc):** For profiles intended for testing on specific devices, it includes a list of the Unique Device Identifiers (UDIDs) of those authorized devices – more on devices in the next section.
    
-   **Entitlements:** A list of app services or capabilities (like Push Notifications, iCloud, App Groups) that the app is permitted to use. These are derived from the capabilities enabled for the _associated App ID_.
    

You can open the file using `vim` or any editor to see parts of the content which include the App Id, Operating Systems, Certificates, and so on.

The operating system checks the provisioning profile at app launch to ensure the app is authorized to run on the current device and use the requested services. If the profile is missing, invalid, or doesn't match the app's signature or the device, the app will not launch.

They are difference from certificates, because certificates are tied to you as a developer. But provisioning profiles are to a specific app – with specific capabilities to a specific developer and maybe on specific devices.

If any of these change (let’s say you added a capability or your certificate expired, for example), you’ll need to generate the provisioning profile again. These are the files you will work with the most out of all the above, and any change can cause your profile to become invalid.

### Types of Provisioning Profiles: Development, Ad Hoc, App Store, (and Enterprise)

### **Types of Provisioning Profiles: Development, Ad Hoc, App Store, (and Enterprise)**

Just like certificates, we have multiple types of provisioning profiles. Similar to certificates, there can be development and distribution provisioning profiles.

Since we also keep track of the devices a profile is supposed to run, we have several kinds of distribution profiles based on which devices it should run on.

We also have special profiles like “Enterprise” which will add additional capabilities (like main camera access on the Vision Pro) but will restrict your app distribution methods to enterprise only.

We will go over each of these types now. Feel free to skip to the one that you’re looking for.

| **Profile Type** | **Purpose** | **Required Certificate Type(s)** | **Device Registration Required?** | **Distribution Method** |
| --- | --- | --- | --- | --- |
| **Development** | Install & debug on registered devices during development (need Xcode to install). | Development | Yes | Xcode run, local device deployment. |
| **Ad Hoc** | Distribute to a limited number of registered test devices (no need for Xcode). | Distribution | Yes | Manual install (for example, via link, email, MDM) for testers. |
| **App Store Connect** | Submit app to App Store Connect for TestFlight or App Store release. | Distribution | No | Upload to App Store Connect. |
| **Enterprise** | Distribute proprietary apps to employees within an organization. | Enterprise (Distribution) | No (subject to program terms) | Internal distribution (e.g., private portal, MDM). |
| **Developer ID** | Allows a macOS app that is distributed outside the App Store to use advanced features | Developer ID | No | Outside the Mac App Store (for example, a web page, USB, MDM ) |

#### **Development Provisioning Profile:**

-   **Allows** an app to be installed and debugged on specific devices registered in the developer's account during the active development phase. More on device registration later.
    
-   **Contains** an App ID, one or more development certificates, and a list of registered device UDIDs.
    
-   **Created** manually in the Apple Developer Portal or generated automatically by Xcode if `Automatically manage signing` is enabled.
    

#### **Ad Hoc Provisioning Profile:**

-   **Allows** distribution of an app to a limited number of registered test devices **without** requiring Xcode for installation. This is ideal for distributing builds to QA teams, beta testers, or clients for feedback.
    
-   **Contains** an App ID (often an explicit App ID, or an Xcode-managed one like `XC Wildcard` or `XC`), a single distribution certificate, and a list of registered device UDIDs.
    
-   **Created** manually in the Developer Portal or managed by Xcode's automatic signing.
    

#### **App Store Connect Provisioning Profile:**

-   **Required** to sign an app for submission to App Store Connect. This is the pathway for distributing apps via TestFlight for broader beta testing and for official release on the App Store.
    
-   **Contains** an explicit App ID (or an App ID that matches the app's bundle ID, including Xcode-managed App IDs), and a single distribution certificate. _Device UDIDs are not included in this profile type since this is meant for broader distribution._
    
-   **Created** manually in the Developer Portal or managed by Xcode's automatic signing.
    

#### **Enterprise Provisioning Profile:**

-   Exclusively for members of the **Apple Developer Enterprise Program**. It allows developers of these orgs to distribute proprietary, in-house applications directly to their employees, bypassing the public App Store.
    
-   Note: This program has stringent enrollment criteria and is strictly for internal distribution within the enrolled organization – these apps cannot be pushed to AppStore.
    

#### **Developer ID Provisioning Profile:**

-   **Required** to utilize certain Apple services or advanced capabilities like Push Notifications, CloudKit, Sign in with Apple, or specific iCloud services.
    
-   **Contains** an App ID, a Developer ID distribution certificate, the entitlements authorized for the app.
    
-   **Created** manually in the Developer Portal – will not be added automatically by Xcode’s automatic signing.
    

### How to Create and Manage Provisioning Profiles

Creating and managing provisioning profiles usually requires an Account Holder or Admin role in the Apple Developer Program. You also need a configured App ID, the appropriate certificate(s), and for Development or Ad Hoc profiles, a list of registered device UDIDs.

If you are new developer, my recommendation is to read this article completely, then get back to this section once you have your devices setup.

General steps for manual creation in the Developer Portal:

1.  Navigate to "Certificates, Identifiers & Profiles" and select "Profiles".
    
2.  Click the add button (+).
    
3.  Select the type of provisioning profile to create (for example, "iOS App Development," "Ad Hoc," "App Store").
    
4.  Choose the App ID you’re targeting from the dropdown list.
    
5.  Select the certificate(s) to include in the profile. Development profiles can include multiple development certificates – so you can include all the team member certificates here. Ad Hoc and App Store profiles include a single distribution certificate.
    
6.  If creating a Development or Ad Hoc profile, select the registered devices to include.
    
7.  Provide a name for the provisioning profile (this is for identification in the portal and Xcode).
    
8.  Click "Generate" and then "Download" the `.mobileprovision` or `.provisionprofile` file.
    

You need to make downloaded profiles available to Xcode. You can often do this by double-clicking the downloaded file or by refreshing profiles within Xcode's account settings (Preferences > Accounts).

I really like Xcode's "Automatically manage signing" feature and it can simplify profile management by a lot. It creates and updates profiles as needed. But, understanding the manual process is crucial for troubleshooting because when things go wrong, it is straightforward to debug the issue with this knowledge.

Provisioning profiles will become invalid and require regeneration if:

-   The capabilities of the associated App ID are changed – let’s say you added a new capability.
    
-   An included certificate expires or is revoked.
    
-   For Development/Ad Hoc profiles, if devices are added or removed from the registered list in a way that affects the profile's device set, or if the profile's own expiration date is reached. When such changes occur, you have to edit the profile (if possible) or delete it and recreate it in the Developer Portal, then re-download it and install it again. While this may seem like a complicated step, it’s straightforward if you do it a couple of times.
    

## **Device Management — Development and Ad Hoc Builds**

For testing applications on physical Apple hardware outside of Testflight or AppStore, you’ll need to register the Unique Device Identifiers (UDIDs) of your test devices with your Apple Developer account. This registration is a necessary step for creating Development and Ad Hoc provisioning profiles.

### Why You Need to Register Test Devices

Development and Ad Hoc provisioning profiles are specifically tied to a list of registered devices. An app signed with this profile can be installed directly without going through App Store process. This means that you need to register devices you intend to develop on. This restricts bad faith actors from releasing apps widely without developer and App Store supervision.

The UUID of a device is like a physical address (think Mac Address). If you don’t include this in the provisioning profile you used to sign an app package, it cannot be installed on that device.

Let’s go over the steps to do that.

### How to Find Your Device's UDID (Unique Device Identifier)

A UDID is a unique 40-character hexadecimal string (for older devices) or a 25-character string (format XXXXXXXX-XXXXXXXXXXXXXXXX) that uniquely identifies a specific iPhone, iPad, Apple Watch, Apple TV, Vision Pro or Mac.

There are several ways to find a device's UDID:

-   **Xcode:** Connect the device to a Mac running Xcode. Open Xcode and navigate to Window > Devices and Simulators. Select the connected device from the list on the left. The UDID will be displayed as the "Identifier" in the device information panel.
    
-   **Finder (macOS Catalina and later):** Connect the iOS or iPadOS device to a Mac. Open Finder and select the device from the sidebar under "Locations." The UDID may be displayed directly, or it might be necessary to click on the line of text beneath the device's name (which shows model, storage, and OS version) to cycle through to display the UDID.
    
-   **iTunes (older macOS versions):** For Macs running macOS Mojave or earlier, connect the device and open iTunes. Select the device icon when it appears. In the "Summary" tab, click on the "Serial Number" field; this will change to display the UDID.
    
-   **Apple Silicon Macs:** When registering an Apple Silicon Mac, it's important to look for the "Provisioning UDID," which can be found in System Information under Hardware > Provisioning UDID.
    
-   **Other Ways:** There are some websites that will install a profile on to your device to get the UUID – so as an absolute last resort, you can do this. _But I highly recommend doing it in the one of the official ways to avoid any potential issues._
    

### How to Register Devices in the Apple Developer Portal

Device registration is managed through the "Certificates, Identifiers & Profiles" section of the Apple Developer Portal (developer.apple.com) and typically requires an Account Holder or Admin role.

To manually register a single device:

1.  Sign in to the Apple Developer Portal and navigate to "Certificates, Identifiers & Profiles," then select "Devices" from the sidebar.
    
2.  Click the add button (+) to register a new device.
    
3.  Select the correct platform for the device (for example, iOS, macOS, tvOS, watchOS).
    
4.  Enter a descriptive "Device Name" (this is for your reference, for example, "Sravan’s iPhone 11 Pro") and the device's UDID obtained in the previous step.
    
5.  Click "Continue," review the information to make sure everything is correct, and then click "Register".
    

For registering multiple devices, the portal supports uploading a specially formatted text file (a .txt or a .deviceids file) containing device names and UDIDs.

If "Automatically manage signing" is enabled in Xcode, Xcode can automatically register a connected device when it's selected as a build target. This is the way I managed all of my personal projects and devices. On the other hand, the file upload was really useful at my workplace to keep track of all the devices and add them at once.

### Understanding Device Limits and Annual Resets

The Apple Developer Program imposes limits on the number of devices that can be registered for testing:

-   **Annual Limit:** Each membership year, a development team can register up to 100 devices for each product family (iPhone, iPad, Apple Watch, Apple TV, Apple Vision Pro, Mac). If you are a large team, this can potentially bottleneck you. When we ran into this issue, we created a new development team that could be split so that it didn’t have too much interdependence. There is no other way as far as I know, other than asking Apple and appealing them.
    
-   **Disabling Devices:** While a device can be disabled in the portal during the membership year, doing so **does not free up its slot or increase the number of available devices for that year**. This part is frustrating but I think this is the only way they can enforce the 100 device limit to avoid people swapping devices. They should just provide a pathway to increase the limit, really. Disabling a device will, however, invalidate any provisioning profiles that include it, requiring those profiles to be regenerated.
    
-   **Resetting Device List (Start of New Membership Year):** At the beginning of a new membership year, Account Holders, Admins, and App Managers are given a one-time option when they first sign in to "Certificates, Identifiers & Profiles" to remove devices from their list. This allows them to "reset" their available device count back to 100 for each product family. You can choose to remove specific devices or all registered devices. **This is your one chance per year to remove unused devices completely and free up slots for new devices.**
    
-   **Membership Expiration:** If a developer program membership is nearing expiration and is not planned for renewal, the Account Holder will have an option, starting 30 days before expiration, to download a copy of their registered device list. They can also opt to have all devices removed from the account immediately upon membership expiration. If no action is taken, devices are typically removed automatically 180 days after membership expiration.
    

## **Possibilities: Enabling Capabilities and Services**

App Capabilities (or App Services) are features provided by Apple that we (as developers) can integrate into our applications to extend functionality and provide richer user experiences. Examples include iCloud storage, Push Notifications, Sign in with Apple, Apple Pay and HealthKit integration. Enabling these often requires explicit configuration for an app's App ID in the Apple Developer Portal and within the Xcode project.

### Why You Should Use Capabilities

Making full use of these App capabilities can set your app apart from other apps in a very noticeable way. You can use Apple Wallet integration if you want users to scan a membership card. You can use journaling suggestions if you want to prompt them to journal something. You can use iCloud Storage to lean further into inter-device synchronization.

When you enable a capability for an App ID, it results in specific entitlements being added to the app's provisioning profile. These entitlements are permissions that the operating system checks at runtime to ensure the app is authorized to use the requested service.

### How to Configure Capabilities for Your App ID (Apple Developer Portal)

Enabling and configuring capabilities is typically done by an Account Holder or Admin in the Apple Developer Portal (developer.apple.com).

1.  Navigate to "Certificates, Identifiers & Profiles" and select "Identifiers."
    
2.  Choose the App ID for which capabilities need to be configured.
    
3.  In the App ID's settings, there will be a "Capabilities" tab. Select the checkboxes for the capabilities the app requires.
    
4.  Many capabilities require additional configuration steps. For these, a "Configure" or "Edit" button will usually appear next to the capability once selected. Examples include:
    

-   **App Groups:** Requires creating or selecting an app group identifier to allow data sharing between a main app and its extensions, or between different apps from the same developer.
    
-   **Apple Pay:** Requires associating one or more Merchant IDs with the App ID.
    
-   **iCloud:** May require choosing Xcode version compatibility and creating or assigning iCloud containers for Key-Value or Document storage
    
-   **Sign in with Apple:** May require configuring the App ID as a primary app or grouping it with an existing primary App ID, and optionally providing a server-to-server notification endpoint URL.
    

5.  After configuring all selected capabilities, click "Save." A warning dialog may appear, which needs confirmation to finalize the changes.

**Enabling a capability in the Developer Portal is only one part of the process.** You’ll also need to add and configure it within the app's target in the Xcode project, under the "Signing & Capabilities" tab.

![Showing the Signing & Capabilities screen in Xcode](https://cdn.hashnode.com/res/hashnode/image/upload/v1748480139418/6a4007b3-01bd-484a-865c-8c5e728e15e0.png)

![Screenshot showing the Capabilities selector in Xcode](https://cdn.hashnode.com/res/hashnode/image/upload/v1748480260906/e0dcec33-24ce-448b-91be-b79f5638e6fc.png)

![Screenshot of Xcode showing three capabilities. ](https://cdn.hashnode.com/res/hashnode/image/upload/v1748480340624/ac56896a-0fb0-4cb0-a3fc-c894a255794a.png)

1.  Navigate to the project settings and select “Signing & Capabilities”.
    
2.  Press the “+ Capability” button to select the capability.
    
3.  Once selected, the capability should appear in the pane. Depending on the capability, you might want to configure it further.
    

This Xcode step integrates the necessary frameworks, adds entitlements files to the project, and adjusts build settings.

### How Enabling Capabilities Affects Your Provisioning Profiles

Changes to an App ID's enabled capabilities have a direct and significant impact on its associated provisioning profiles.

-   **Invalidation:** When a capability is enabled, disabled, or its configuration is modified for an App ID, **all existing provisioning profiles that use that App ID immediately become invalid**.
    
-   **Regeneration Required:** These invalidated provisioning profiles must be regenerated (either by editing and re-saving them in the Developer Portal or by having Xcode's automatic signing handle it). The regenerated profiles will then include the updated set of entitlements corresponding to the newly configured capabilities.
    
-   **Platform Impact:** Enabling a capability for an App ID that is used across multiple platforms (for example, an iOS app and its watchOS companion) will affect the provisioning profiles for all eligible platforms that use that App ID.
    

This is something to keep in mind. Especially when it comes to distribution profiles since those are usually manually managed.

## **Conclusion**

While all of these might seem daunting, Apple’s automatic process should handle most of it. But I highly recommend learning how everything works so that you can debug it in case something goes wrong. I also highly recommend using manually created profiles for distribution.

While signing and handling certificates is not the most exciting part of the App development process, it is a necessary skill to have. In my next article, I will go over distributing an app from start to finish (which includes these processes and more restrictions).

You can follow me at [Sravan Karuturi][11] for my other posts.

[1]: #heading-app-ids-bundle-ids-your-apps-identity
[2]: #heading-understanding-distribution-a-deep-dive-into-certificates
[3]: #heading-bridge-between-everything-provisioning-profiles
[4]: #heading-device-management-development-and-ad-hoc-builds
[5]: #heading-possibilities-enabling-capabilities-and-services
[6]: #heading-conclusion
[7]: http://com.mycompany.app
[8]: http://com.foo.bar
[9]: http://com.foo
[10]: https://developer.apple.com/documentation/appstoreconnectapi
[11]: https://hashnode.com/@sravankaruturi