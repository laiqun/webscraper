/*
https://github.com/schemaorg/schemaorg/blob/e73d7b74c2eb0c9d2e492f30e81d2914cf3ed2ba/data/releases/4.0/schemaorgcontext.jsonld
https://github.com/schemaorg/schemaorg/blob/e73d7b74c2eb0c9d2e492f30e81d2914cf3ed2ba/data/releases/12.0/schemaorgcontext.jsonld
https://www.suzukikenichi.com/blog/schema-org-for-local-business-information/
http://www.spsa.cn/2178.html
Schema.org（通常称为Schema）是标记（或微数据）的语义词汇表，您可以将其添加到HTML中，以改善搜索引擎在SERP中读取和表示页面的方式。

代码样例
<div itemscope itemtype =“ https://schema.org/Book”> <span itemprop =“ name”>入站营销和SEO</ span> <span itemprop =“ author”> Rand Fishkin < / span> </ div>

什么是Schema.org结构化数据？
Schema.org是Google，Bing，Yandex和Yahoo!合作的结果。为了帮助您提供他们的搜索引擎理解您的内容所需的信息，并在此时提供最佳搜索结果。在HTML中添加架构标记，可以增强页面标题下方显示的丰富网页摘要，从而改善页面在SERP中的显示方式。
* */

let SchemaOrgSchema = {
    datatypes: {
        Boolean: {
            properties: [],
            specific_properties: []
        },
        DataType: {
            properties: [],
            specific_properties: []
        },
        Date: {
            properties: [],
            specific_properties: []
        },
        DateTime: {
            properties: [],
            specific_properties: []
        },
        Float: {
            properties: [],
            specific_properties: []
        },
        Integer: {
            properties: [],
            specific_properties: []
        },
        Number: {
            properties: [],
            specific_properties: []
        },
        Text: {
            properties: [],
            specific_properties: []
        },
        Time: {
            properties: [],
            specific_properties: []
        },
        URL: {
            properties: [],
            specific_properties: []
        }
    },
    properties: {
        about: {
            domains: ["CommunicateAction", "CreativeWork", "Event"],
            ranges: ["Thing"]
        },
        abridged: {
            domains: ["Book"],
            ranges: ["Boolean"]
        },
        accelerationTime: {
            domains: ["Vehicle"],
            ranges: ["QuantitativeValue"]
        },
        acceptedAnswer: {
            domains: ["Question"],
            ranges: ["Answer"]
        },
        acceptedOffer: {
            domains: ["Order"],
            ranges: ["Offer"]
        },
        acceptedPaymentMethod: {
            domains: ["Offer", "Demand"],
            ranges: ["PaymentMethod", "LoanOrCredit"]
        },
        acceptsReservations: {
            domains: ["FoodEstablishment"],
            ranges: ["Boolean", "Text", "URL"]
        },
        accessCode: {
            domains: ["DeliveryEvent"],
            ranges: ["Text"]
        },
        accessMode: {
            domains: ["CreativeWork"],
            ranges: ["Text"]
        },
        accessModeSufficient: {
            domains: ["CreativeWork"],
            ranges: ["Text"]
        },
        accessibilityAPI: {
            domains: ["CreativeWork"],
            ranges: ["Text"]
        },
        accessibilityControl: {
            domains: ["CreativeWork"],
            ranges: ["Text"]
        },
        accessibilityFeature: {
            domains: ["CreativeWork"],
            ranges: ["Text"]
        },
        accessibilityHazard: {
            domains: ["CreativeWork"],
            ranges: ["Text"]
        },
        accessibilitySummary: {
            domains: ["CreativeWork"],
            ranges: ["Text"]
        },
        accountId: {
            domains: ["Invoice"],
            ranges: ["Text"]
        },
        accountMinimumInflow: {
            domains: ["BankAccount"],
            ranges: ["MonetaryAmount"]
        },
        accountOverdraftLimit: {
            domains: ["BankAccount"],
            ranges: ["MonetaryAmount"]
        },
        accountablePerson: {
            domains: ["CreativeWork"],
            ranges: ["Person"]
        },
        acquiredFrom: {
            domains: ["OwnershipInfo"],
            ranges: ["Organization", "Person"]
        },
        acrissCode: {
            domains: ["Car"],
            ranges: ["Text"]
        },
        actionApplication: {
            domains: ["EntryPoint"],
            ranges: ["SoftwareApplication"]
        },
        actionOption: {
            domains: ["ChooseAction"],
            ranges: ["Text", "Thing"]
        },
        actionPlatform: {
            domains: ["EntryPoint"],
            ranges: ["Text", "URL"]
        },
        actionStatus: {
            domains: ["Action"],
            ranges: ["ActionStatusType"]
        },
        actionableFeedbackPolicy: {
            domains: ["Organization"],
            ranges: ["CreativeWork", "URL"]
        },
        actor: {
            domains: ["VideoGame", "VideoObject", "Episode", "RadioSeries", "Clip", "Movie", "VideoGameSeries", "MovieSeries", "TVSeries", "Event"],
            ranges: ["Person"]
        },
        addOn: {
            domains: ["Offer"],
            ranges: ["Offer"]
        },
        additionalName: {
            domains: ["Person"],
            ranges: ["Text"]
        },
        additionalNumberOfGuests: {
            domains: ["RsvpAction"],
            ranges: ["Number"]
        },
        additionalProperty: {
            domains: ["QualitativeValue", "Product", "Place", "QuantitativeValue"],
            ranges: ["PropertyValue"]
        },
        additionalType: {
            domains: ["Thing"],
            ranges: ["URL"]
        },
        address: {
            domains: ["Person", "GeoShape", "Place", "GeoCoordinates", "Organization"],
            ranges: ["Text", "PostalAddress"]
        },
        addressCountry: {
            domains: ["PostalAddress", "GeoShape", "GeoCoordinates"],
            ranges: ["Country", "Text"]
        },
        addressLocality: {
            domains: ["PostalAddress"],
            ranges: ["Text"]
        },
        addressRegion: {
            domains: ["PostalAddress"],
            ranges: ["Text"]
        },
        advanceBookingRequirement: {
            domains: ["Offer", "Demand"],
            ranges: ["QuantitativeValue"]
        },
        affiliation: {
            domains: ["Person"],
            ranges: ["Organization"]
        },
        afterMedia: {
            domains: ["HowToDirection"],
            ranges: ["MediaObject"]
        },
        agent: {
            domains: ["Action"],
            ranges: ["Organization", "Person"]
        },
        aggregateRating: {
            domains: ["Product", "Service", "Offer", "Brand", "Place", "Organization", "CreativeWork", "Event"],
            ranges: ["AggregateRating"]
        },
        aircraft: {
            domains: ["Flight"],
            ranges: ["Text", "Vehicle"]
        },
        album: {
            domains: ["MusicGroup"],
            ranges: ["MusicAlbum"]
        },
        albumProductionType: {
            domains: ["MusicAlbum"],
            ranges: ["MusicAlbumProductionType"]
        },
        albumRelease: {
            domains: ["MusicAlbum"],
            ranges: ["MusicRelease"]
        },
        albumReleaseType: {
            domains: ["MusicAlbum"],
            ranges: ["MusicAlbumReleaseType"]
        },
        alignmentType: {
            domains: ["AlignmentObject"],
            ranges: ["Text"]
        },
        alternateName: {
            domains: ["Thing"],
            ranges: ["Text"]
        },
        alternativeHeadline: {
            domains: ["CreativeWork"],
            ranges: ["Text"]
        },
        alumni: {
            domains: ["Organization", "EducationalOrganization"],
            ranges: ["Person"]
        },
        alumniOf: {
            domains: ["Person"],
            ranges: ["EducationalOrganization", "Organization"]
        },
        amenityFeature: {
            domains: ["LodgingBusiness", "Place", "Accommodation"],
            ranges: ["LocationFeatureSpecification"]
        },
        amount: {
            domains: ["InvestmentOrDeposit", "LoanOrCredit"],
            ranges: ["Number", "MonetaryAmount"]
        },
        amountOfThisGood: {
            domains: ["TypeAndQuantityNode"],
            ranges: ["Number"]
        },
        annualPercentageRate: {
            domains: ["FinancialProduct"],
            ranges: ["Number", "QuantitativeValue"]
        },
        answerCount: {
            domains: ["Question"],
            ranges: ["Integer"]
        },
        applicationCategory: {
            domains: ["SoftwareApplication"],
            ranges: ["Text", "URL"]
        },
        applicationSubCategory: {
            domains: ["SoftwareApplication"],
            ranges: ["Text", "URL"]
        },
        applicationSuite: {
            domains: ["SoftwareApplication"],
            ranges: ["Text"]
        },
        appliesToDeliveryMethod: {
            domains: ["DeliveryChargeSpecification", "PaymentChargeSpecification"],
            ranges: ["DeliveryMethod"]
        },
        appliesToPaymentMethod: {
            domains: ["PaymentChargeSpecification"],
            ranges: ["PaymentMethod"]
        },
        areaServed: {
            domains: ["Service", "Offer", "Demand", "DeliveryChargeSpecification", "Organization", "ContactPoint"],
            ranges: ["Text", "GeoShape", "AdministrativeArea", "Place"]
        },
        arrivalAirport: {
            domains: ["Flight"],
            ranges: ["Airport"]
        },
        arrivalBusStop: {
            domains: ["BusTrip"],
            ranges: ["BusStation", "BusStop"]
        },
        arrivalGate: {
            domains: ["Flight"],
            ranges: ["Text"]
        },
        arrivalPlatform: {
            domains: ["TrainTrip"],
            ranges: ["Text"]
        },
        arrivalStation: {
            domains: ["TrainTrip"],
            ranges: ["TrainStation"]
        },
        arrivalTerminal: {
            domains: ["Flight"],
            ranges: ["Text"]
        },
        arrivalTime: {
            domains: ["BusTrip", "TrainTrip", "Flight"],
            ranges: ["DateTime"]
        },
        artEdition: {
            domains: ["VisualArtwork"],
            ranges: ["Integer", "Text"]
        },
        artMedium: {
            domains: ["VisualArtwork"],
            ranges: ["Text", "URL"]
        },
        artform: {
            domains: ["VisualArtwork"],
            ranges: ["Text", "URL"]
        },
        articleBody: {
            domains: ["Article"],
            ranges: ["Text"]
        },
        articleSection: {
            domains: ["Article"],
            ranges: ["Text"]
        },
        artist: {
            domains: ["VisualArtwork"],
            ranges: ["Person"]
        },
        artworkSurface: {
            domains: ["VisualArtwork"],
            ranges: ["Text", "URL"]
        },
        assemblyVersion: {
            domains: ["APIReference"],
            ranges: ["Text"]
        },
        associatedArticle: {
            domains: ["MediaObject"],
            ranges: ["NewsArticle"]
        },
        associatedMedia: {
            domains: ["CreativeWork"],
            ranges: ["MediaObject"]
        },
        athlete: {
            domains: ["SportsTeam"],
            ranges: ["Person"]
        },
        attendee: {
            domains: ["Event"],
            ranges: ["Organization", "Person"]
        },
        audience: {
            domains: ["Product", "Service", "PlayAction", "LodgingBusiness", "CreativeWork", "Event"],
            ranges: ["Audience"]
        },
        audienceType: {
            domains: ["Audience"],
            ranges: ["Text"]
        },
        audio: {
            domains: ["CreativeWork"],
            ranges: ["AudioObject"]
        },
        author: {
            domains: ["Rating", "CreativeWork"],
            ranges: ["Organization", "Person"]
        },
        availability: {
            domains: ["Offer", "Demand"],
            ranges: ["ItemAvailability"]
        },
        availabilityEnds: {
            domains: ["Offer", "Demand"],
            ranges: ["DateTime"]
        },
        availabilityStarts: {
            domains: ["Offer", "Demand"],
            ranges: ["DateTime"]
        },
        availableAtOrFrom: {
            domains: ["Offer", "Demand"],
            ranges: ["Place"]
        },
        availableChannel: {
            domains: ["Service"],
            ranges: ["ServiceChannel"]
        },
        availableDeliveryMethod: {
            domains: ["Offer", "Demand"],
            ranges: ["DeliveryMethod"]
        },
        availableFrom: {
            domains: ["DeliveryEvent"],
            ranges: ["DateTime"]
        },
        availableLanguage: {
            domains: ["ServiceChannel", "LodgingBusiness", "ContactPoint", "TouristAttraction"],
            ranges: ["Text", "Language"]
        },
        availableOnDevice: {
            domains: ["SoftwareApplication"],
            ranges: ["Text"]
        },
        availableService: {
            domains: ["Physician", "Hospital"],
            ranges: ["MedicalTest", "MedicalProcedure", "MedicalTherapy"]
        },
        availableThrough: {
            domains: ["DeliveryEvent"],
            ranges: ["DateTime"]
        },
        award: {
            domains: ["Person", "Product", "CreativeWork", "Service", "Organization"],
            ranges: ["Text"]
        },
        awayTeam: {
            domains: ["SportsEvent"],
            ranges: ["Person", "SportsTeam"]
        },
        bankAccountType: {
            domains: ["BankAccount"],
            ranges: ["Text", "URL"]
        },
        baseSalary: {
            domains: ["JobPosting", "EmployeeRole"],
            ranges: ["PriceSpecification", "Number", "MonetaryAmount"]
        },
        bccRecipient: {
            domains: ["Message"],
            ranges: ["ContactPoint", "Organization", "Person"]
        },
        bed: {
            domains: ["Suite", "HotelRoom"],
            ranges: ["Text", "BedType", "BedDetails"]
        },
        beforeMedia: {
            domains: ["HowToDirection"],
            ranges: ["MediaObject"]
        },
        bestRating: {
            domains: ["Rating"],
            ranges: ["Number", "Text"]
        },
        billingAddress: {
            domains: ["Order"],
            ranges: ["PostalAddress"]
        },
        billingIncrement: {
            domains: ["UnitPriceSpecification"],
            ranges: ["Number"]
        },
        billingPeriod: {
            domains: ["Invoice"],
            ranges: ["Duration"]
        },
        birthDate: {
            domains: ["Person"],
            ranges: ["Date"]
        },
        birthPlace: {
            domains: ["Person"],
            ranges: ["Place"]
        },
        bitrate: {
            domains: ["MediaObject"],
            ranges: ["Text"]
        },
        blogPost: {
            domains: ["Blog"],
            ranges: ["BlogPosting"]
        },
        boardingGroup: {
            domains: ["FlightReservation"],
            ranges: ["Text"]
        },
        boardingPolicy: {
            domains: ["Flight", "Airline"],
            ranges: ["BoardingPolicyType"]
        },
        bodyType: {
            domains: ["Vehicle"],
            ranges: ["QualitativeValue", "Text", "URL"]
        },
        bookEdition: {
            domains: ["Book"],
            ranges: ["Text"]
        },
        bookFormat: {
            domains: ["Book"],
            ranges: ["BookFormatType"]
        },
        bookingTime: {
            domains: ["Reservation"],
            ranges: ["DateTime"]
        },
        borrower: {
            domains: ["LendAction"],
            ranges: ["Person"]
        },
        box: {
            domains: ["GeoShape"],
            ranges: ["Text"]
        },
        branchCode: {
            domains: ["Place"],
            ranges: ["Text"]
        },
        brand: {
            domains: ["Person", "Product", "Service", "Organization"],
            ranges: ["Organization", "Brand"]
        },
        breadcrumb: {
            domains: ["WebPage"],
            ranges: ["BreadcrumbList", "Text"]
        },
        broadcastAffiliateOf: {
            domains: ["BroadcastService"],
            ranges: ["Organization"]
        },
        broadcastChannelId: {
            domains: ["BroadcastChannel"],
            ranges: ["Text"]
        },
        broadcastDisplayName: {
            domains: ["BroadcastService"],
            ranges: ["Text"]
        },
        broadcastFrequency: {
            domains: ["BroadcastService", "BroadcastChannel"],
            ranges: ["Text", "BroadcastFrequencySpecification"]
        },
        broadcastOfEvent: {
            domains: ["BroadcastEvent"],
            ranges: ["Event"]
        },
        broadcastServiceTier: {
            domains: ["BroadcastChannel"],
            ranges: ["Text"]
        },
        broadcastTimezone: {
            domains: ["BroadcastService"],
            ranges: ["Text"]
        },
        broadcaster: {
            domains: ["BroadcastService"],
            ranges: ["Organization"]
        },
        broker: {
            domains: ["Reservation", "Service", "Order", "Invoice"],
            ranges: ["Organization", "Person"]
        },
        browserRequirements: {
            domains: ["WebApplication"],
            ranges: ["Text"]
        },
        busName: {
            domains: ["BusTrip"],
            ranges: ["Text"]
        },
        busNumber: {
            domains: ["BusTrip"],
            ranges: ["Text"]
        },
        businessFunction: {
            domains: ["Offer", "TypeAndQuantityNode", "Demand"],
            ranges: ["BusinessFunction"]
        },
        buyer: {
            domains: ["SellAction"],
            ranges: ["Person"]
        },
        byArtist: {
            domains: ["MusicAlbum", "MusicRecording"],
            ranges: ["MusicGroup"]
        },
        calories: {
            domains: ["NutritionInformation"],
            ranges: ["Energy"]
        },
        candidate: {
            domains: ["VoteAction"],
            ranges: ["Person"]
        },
        caption: {
            domains: ["VideoObject", "ImageObject"],
            ranges: ["Text"]
        },
        carbohydrateContent: {
            domains: ["NutritionInformation"],
            ranges: ["Mass"]
        },
        cargoVolume: {
            domains: ["Vehicle"],
            ranges: ["QuantitativeValue"]
        },
        carrierRequirements: {
            domains: ["MobileApplication"],
            ranges: ["Text"]
        },
        cashBack: {
            domains: ["PaymentCard"],
            ranges: ["Boolean", "Number"]
        },
        catalogNumber: {
            domains: ["MusicRelease"],
            ranges: ["Text"]
        },
        category: {
            domains: ["Product", "Service", "Invoice", "Offer"],
            ranges: ["Text", "PhysicalActivityCategory", "Thing"]
        },
        ccRecipient: {
            domains: ["Message"],
            ranges: ["ContactPoint", "Organization", "Person"]
        },
        character: {
            domains: ["CreativeWork"],
            ranges: ["Person"]
        },
        characterAttribute: {
            domains: ["Game", "VideoGameSeries"],
            ranges: ["Thing"]
        },
        characterName: {
            domains: ["PerformanceRole"],
            ranges: ["Text"]
        },
        cheatCode: {
            domains: ["VideoGame", "VideoGameSeries"],
            ranges: ["CreativeWork"]
        },
        checkinTime: {
            domains: ["LodgingReservation", "LodgingBusiness"],
            ranges: ["DateTime"]
        },
        checkoutTime: {
            domains: ["LodgingReservation", "LodgingBusiness"],
            ranges: ["DateTime"]
        },
        childMaxAge: {
            domains: ["ParentAudience"],
            ranges: ["Number"]
        },
        childMinAge: {
            domains: ["ParentAudience"],
            ranges: ["Number"]
        },
        children: {
            domains: ["Person"],
            ranges: ["Person"]
        },
        cholesterolContent: {
            domains: ["NutritionInformation"],
            ranges: ["Mass"]
        },
        circle: {
            domains: ["GeoShape"],
            ranges: ["Text"]
        },
        citation: {
            domains: ["CreativeWork"],
            ranges: ["CreativeWork", "Text"]
        },
        claimReviewed: {
            domains: ["ClaimReview"],
            ranges: ["Text"]
        },
        clipNumber: {
            domains: ["Clip"],
            ranges: ["Integer", "Text"]
        },
        closes: {
            domains: ["OpeningHoursSpecification"],
            ranges: ["Time"]
        },
        coach: {
            domains: ["SportsTeam"],
            ranges: ["Person"]
        },
        codeRepository: {
            domains: ["SoftwareSourceCode"],
            ranges: ["URL"]
        },
        codeSampleType: {
            domains: ["SoftwareSourceCode"],
            ranges: ["Text"]
        },
        colleague: {
            domains: ["Person"],
            ranges: ["Person", "URL"]
        },
        color: {
            domains: ["Product"],
            ranges: ["Text"]
        },
        colorist: {
            domains: ["VisualArtwork"],
            ranges: ["Person"]
        },
        comment: {
            domains: ["RsvpAction", "CreativeWork"],
            ranges: ["Comment"]
        },
        commentCount: {
            domains: ["CreativeWork"],
            ranges: ["Integer"]
        },
        competitor: {
            domains: ["SportsEvent"],
            ranges: ["Person", "SportsTeam"]
        },
        composer: {
            domains: ["MusicComposition", "Event"],
            ranges: ["Organization", "Person"]
        },
        confirmationNumber: {
            domains: ["Order", "Invoice"],
            ranges: ["Text"]
        },
        contactOption: {
            domains: ["ContactPoint"],
            ranges: ["ContactPointOption"]
        },
        contactPoint: {
            domains: ["Person", "Organization"],
            ranges: ["ContactPoint"]
        },
        contactType: {
            domains: ["ContactPoint"],
            ranges: ["Text"]
        },
        contactlessPayment: {
            domains: ["PaymentCard"],
            ranges: ["Boolean"]
        },
        containedInPlace: {
            domains: ["Place"],
            ranges: ["Place"]
        },
        containsPlace: {
            domains: ["Place"],
            ranges: ["Place"]
        },
        containsSeason: {
            domains: ["VideoGameSeries", "TVSeries", "RadioSeries"],
            ranges: ["CreativeWorkSeason"]
        },
        contentLocation: {
            domains: ["CreativeWork"],
            ranges: ["Place"]
        },
        contentRating: {
            domains: ["CreativeWork"],
            ranges: ["Text"]
        },
        contentReferenceTime: {
            domains: ["CreativeWork"],
            ranges: ["DateTime"]
        },
        contentSize: {
            domains: ["MediaObject"],
            ranges: ["Text"]
        },
        contentType: {
            domains: ["EntryPoint"],
            ranges: ["Text"]
        },
        contentUrl: {
            domains: ["MediaObject"],
            ranges: ["URL"]
        },
        contributor: {
            domains: ["CreativeWork", "Event"],
            ranges: ["Organization", "Person"]
        },
        cookTime: {
            domains: ["Recipe"],
            ranges: ["Duration"]
        },
        cookingMethod: {
            domains: ["Recipe"],
            ranges: ["Text"]
        },
        copyrightHolder: {
            domains: ["CreativeWork"],
            ranges: ["Organization", "Person"]
        },
        copyrightYear: {
            domains: ["CreativeWork"],
            ranges: ["Number"]
        },
        correctionsPolicy: {
            domains: ["Organization"],
            ranges: ["CreativeWork", "URL"]
        },
        countriesNotSupported: {
            domains: ["SoftwareApplication"],
            ranges: ["Text"]
        },
        countriesSupported: {
            domains: ["SoftwareApplication"],
            ranges: ["Text"]
        },
        countryOfOrigin: {
            domains: ["TVEpisode", "Movie", "TVSeries", "TVSeason"],
            ranges: ["Country"]
        },
        courseCode: {
            domains: ["Course"],
            ranges: ["Text"]
        },
        courseMode: {
            domains: ["CourseInstance"],
            ranges: ["Text", "URL"]
        },
        coursePrerequisites: {
            domains: ["Course"],
            ranges: ["AlignmentObject", "Course", "Text"]
        },
        coverageEndTime: {
            domains: ["LiveBlogPosting"],
            ranges: ["DateTime"]
        },
        coverageStartTime: {
            domains: ["LiveBlogPosting"],
            ranges: ["DateTime"]
        },
        creator: {
            domains: ["CreativeWork"],
            ranges: ["Organization", "Person"]
        },
        creditedTo: {
            domains: ["MusicRelease"],
            ranges: ["Organization", "Person"]
        },
        cssSelector: {
            domains: ["WebPageElement"],
            ranges: ["CssSelectorType"]
        },
        currenciesAccepted: {
            domains: ["LocalBusiness"],
            ranges: ["Text"]
        },
        currency: {
            domains: ["LoanOrCredit"],
            ranges: ["Text"]
        },
        customer: {
            domains: ["Order", "Invoice"],
            ranges: ["Organization", "Person"]
        },
        dataFeedElement: {
            domains: ["DataFeed"],
            ranges: ["DataFeedItem", "Text", "Thing"]
        },
        dataset: {
            domains: ["DataCatalog"],
            ranges: ["Dataset"]
        },
        dateCreated: {
            domains: ["CreativeWork", "DataFeedItem"],
            ranges: ["Date", "DateTime"]
        },
        dateDeleted: {
            domains: ["DataFeedItem"],
            ranges: ["DateTime"]
        },
        dateIssued: {
            domains: ["Ticket"],
            ranges: ["DateTime"]
        },
        dateModified: {
            domains: ["CreativeWork", "DataFeedItem"],
            ranges: ["Date", "DateTime"]
        },
        datePosted: {
            domains: ["JobPosting"],
            ranges: ["Date"]
        },
        datePublished: {
            domains: ["CreativeWork"],
            ranges: ["Date"]
        },
        dateRead: {
            domains: ["Message"],
            ranges: ["DateTime"]
        },
        dateReceived: {
            domains: ["Message"],
            ranges: ["DateTime"]
        },
        dateSent: {
            domains: ["Message"],
            ranges: ["DateTime"]
        },
        dateVehicleFirstRegistered: {
            domains: ["Vehicle"],
            ranges: ["Date"]
        },
        dateline: {
            domains: ["NewsArticle"],
            ranges: ["Text"]
        },
        dayOfWeek: {
            domains: ["OpeningHoursSpecification"],
            ranges: ["DayOfWeek"]
        },
        deathDate: {
            domains: ["Person"],
            ranges: ["Date"]
        },
        deathPlace: {
            domains: ["Person"],
            ranges: ["Place"]
        },
        defaultValue: {
            domains: ["PropertyValueSpecification"],
            ranges: ["Text", "Thing"]
        },
        deliveryAddress: {
            domains: ["ParcelDelivery"],
            ranges: ["PostalAddress"]
        },
        deliveryLeadTime: {
            domains: ["Offer", "Demand"],
            ranges: ["QuantitativeValue"]
        },
        deliveryMethod: {
            domains: ["ReceiveAction", "TrackAction", "OrderAction", "SendAction"],
            ranges: ["DeliveryMethod"]
        },
        deliveryStatus: {
            domains: ["ParcelDelivery"],
            ranges: ["DeliveryEvent"]
        },
        department: {
            domains: ["Organization"],
            ranges: ["Organization"]
        },
        departureAirport: {
            domains: ["Flight"],
            ranges: ["Airport"]
        },
        departureBusStop: {
            domains: ["BusTrip"],
            ranges: ["BusStation", "BusStop"]
        },
        departureGate: {
            domains: ["Flight"],
            ranges: ["Text"]
        },
        departurePlatform: {
            domains: ["TrainTrip"],
            ranges: ["Text"]
        },
        departureStation: {
            domains: ["TrainTrip"],
            ranges: ["TrainStation"]
        },
        departureTerminal: {
            domains: ["Flight"],
            ranges: ["Text"]
        },
        departureTime: {
            domains: ["BusTrip", "TrainTrip", "Flight"],
            ranges: ["DateTime"]
        },
        dependencies: {
            domains: ["TechArticle"],
            ranges: ["Text"]
        },
        depth: {
            domains: ["VisualArtwork", "Product"],
            ranges: ["Distance", "QuantitativeValue"]
        },
        description: {
            domains: ["Thing"],
            ranges: ["Text"]
        },
        diet: {
            domains: ["ExerciseAction"],
            ranges: ["Diet"]
        },
        director: {
            domains: ["VideoGame", "VideoObject", "Episode", "RadioSeries", "Clip", "Movie", "VideoGameSeries", "MovieSeries", "TVSeries", "Event"],
            ranges: ["Person"]
        },
        disambiguatingDescription: {
            domains: ["Thing"],
            ranges: ["Text"]
        },
        discount: {
            domains: ["Order"],
            ranges: ["Number", "Text"]
        },
        discountCode: {
            domains: ["Order"],
            ranges: ["Text"]
        },
        discountCurrency: {
            domains: ["Order"],
            ranges: ["Text"]
        },
        discussionUrl: {
            domains: ["CreativeWork"],
            ranges: ["URL"]
        },
        dissolutionDate: {
            domains: ["Organization"],
            ranges: ["Date"]
        },
        distance: {
            domains: ["TravelAction", "ExerciseAction"],
            ranges: ["Distance"]
        },
        distribution: {
            domains: ["Dataset"],
            ranges: ["DataDownload"]
        },
        diversityPolicy: {
            domains: ["Organization"],
            ranges: ["CreativeWork", "URL"]
        },
        doorTime: {
            domains: ["Event"],
            ranges: ["DateTime"]
        },
        downloadUrl: {
            domains: ["SoftwareApplication"],
            ranges: ["URL"]
        },
        downvoteCount: {
            domains: ["Comment", "Question"],
            ranges: ["Integer"]
        },
        driveWheelConfiguration: {
            domains: ["Vehicle"],
            ranges: ["DriveWheelConfigurationValue", "Text"]
        },
        dropoffLocation: {
            domains: ["RentalCarReservation"],
            ranges: ["Place"]
        },
        dropoffTime: {
            domains: ["RentalCarReservation"],
            ranges: ["DateTime"]
        },
        duns: {
            domains: ["Person", "Organization"],
            ranges: ["Text"]
        },
        duration: {
            domains: ["Movie", "MediaObject", "MusicRelease", "Event", "MusicRecording"],
            ranges: ["Duration"]
        },
        durationOfWarranty: {
            domains: ["WarrantyPromise"],
            ranges: ["QuantitativeValue"]
        },
        duringMedia: {
            domains: ["HowToDirection"],
            ranges: ["MediaObject"]
        },
        editor: {
            domains: ["CreativeWork"],
            ranges: ["Person"]
        },
        educationRequirements: {
            domains: ["JobPosting"],
            ranges: ["Text"]
        },
        educationalAlignment: {
            domains: ["CreativeWork"],
            ranges: ["AlignmentObject"]
        },
        educationalCredentialAwarded: {
            domains: ["Course"],
            ranges: ["Text", "URL"]
        },
        educationalFramework: {
            domains: ["AlignmentObject"],
            ranges: ["Text"]
        },
        educationalRole: {
            domains: ["EducationalAudience"],
            ranges: ["Text"]
        },
        educationalUse: {
            domains: ["CreativeWork"],
            ranges: ["Text"]
        },
        elevation: {
            domains: ["GeoShape", "GeoCoordinates"],
            ranges: ["Text", "Number"]
        },
        eligibleCustomerType: {
            domains: ["Offer", "Demand"],
            ranges: ["BusinessEntityType"]
        },
        eligibleDuration: {
            domains: ["Offer", "Demand"],
            ranges: ["QuantitativeValue"]
        },
        eligibleQuantity: {
            domains: ["Offer", "PriceSpecification", "Demand"],
            ranges: ["QuantitativeValue"]
        },
        eligibleRegion: {
            domains: ["DeliveryChargeSpecification", "Offer", "Demand"],
            ranges: ["Text", "GeoShape", "Place"]
        },
        eligibleTransactionVolume: {
            domains: ["Offer", "PriceSpecification", "Demand"],
            ranges: ["PriceSpecification"]
        },
        email: {
            domains: ["Person", "ContactPoint", "Organization"],
            ranges: ["Text"]
        },
        embedUrl: {
            domains: ["MediaObject"],
            ranges: ["URL"]
        },
        emissionsCO2: {
            domains: ["Vehicle"],
            ranges: ["Number"]
        },
        employee: {
            domains: ["Organization"],
            ranges: ["Person"]
        },
        employmentType: {
            domains: ["JobPosting"],
            ranges: ["Text"]
        },
        encodesCreativeWork: {
            domains: ["MediaObject"],
            ranges: ["CreativeWork"]
        },
        encoding: {
            domains: ["CreativeWork"],
            ranges: ["MediaObject"]
        },
        encodingFormat: {
            domains: ["MediaObject"],
            ranges: ["Text"]
        },
        encodingType: {
            domains: ["EntryPoint"],
            ranges: ["Text"]
        },
        endDate: {
            domains: ["Role", "CreativeWorkSeries", "Event"],
            ranges: ["Date", "DateTime"]
        },
        endTime: {
            domains: ["Action", "FoodEstablishmentReservation"],
            ranges: ["DateTime"]
        },
        endorsee: {
            domains: ["EndorseAction"],
            ranges: ["Organization", "Person"]
        },
        engineDisplacement: {
            domains: ["EngineSpecification"],
            ranges: ["QuantitativeValue"]
        },
        enginePower: {
            domains: ["EngineSpecification"],
            ranges: ["QuantitativeValue"]
        },
        engineType: {
            domains: ["EngineSpecification"],
            ranges: ["QualitativeValue", "Text", "URL"]
        },
        entertainmentBusiness: {
            domains: ["PerformAction"],
            ranges: ["EntertainmentBusiness"]
        },
        episode: {
            domains: ["VideoGameSeries", "TVSeries", "RadioSeries"],
            ranges: ["Episode"]
        },
        episodeNumber: {
            domains: ["Episode"],
            ranges: ["Integer", "Text"]
        },
        equal: {
            domains: ["QualitativeValue"],
            ranges: ["QualitativeValue"]
        },
        error: {
            domains: ["Action"],
            ranges: ["Thing"]
        },
        estimatedCost: {
            domains: ["HowToSupply", "HowTo"],
            ranges: ["Text", "MonetaryAmount"]
        },
        estimatedFlightDuration: {
            domains: ["Flight"],
            ranges: ["Duration", "Text"]
        },
        estimatedSalary: {
            domains: ["JobPosting"],
            ranges: ["MonetaryAmount", "MonetaryAmountDistribution", "Number", "PriceSpecification"]
        },
        ethicsPolicy: {
            domains: ["Organization"],
            ranges: ["CreativeWork", "URL"]
        },
        event: {
            domains: ["PlayAction", "Place", "JoinAction", "InviteAction", "InformAction", "Organization", "LeaveAction"],
            ranges: ["Event"]
        },
        eventStatus: {
            domains: ["Event"],
            ranges: ["EventStatusType"]
        },
        exampleOfWork: {
            domains: ["CreativeWork"],
            ranges: ["CreativeWork"]
        },
        executableLibraryName: {
            domains: ["APIReference"],
            ranges: ["Text"]
        },
        exerciseCourse: {
            domains: ["ExerciseAction"],
            ranges: ["Place"]
        },
        exercisePlan: {
            domains: ["ExerciseAction"],
            ranges: ["ExercisePlan"]
        },
        exerciseRelatedDiet: {
            domains: ["ExerciseAction"],
            ranges: ["Diet"]
        },
        exerciseType: {
            domains: ["ExerciseAction"],
            ranges: ["Text"]
        },
        exifData: {
            domains: ["ImageObject"],
            ranges: ["PropertyValue", "Text"]
        },
        expectedArrivalFrom: {
            domains: ["ParcelDelivery"],
            ranges: ["DateTime"]
        },
        expectedArrivalUntil: {
            domains: ["ParcelDelivery"],
            ranges: ["DateTime"]
        },
        expectsAcceptanceOf: {
            domains: ["ConsumeAction"],
            ranges: ["Offer"]
        },
        experienceRequirements: {
            domains: ["JobPosting"],
            ranges: ["Text"]
        },
        expires: {
            domains: ["CreativeWork"],
            ranges: ["Date"]
        },
        familyName: {
            domains: ["Person"],
            ranges: ["Text"]
        },
        fatContent: {
            domains: ["NutritionInformation"],
            ranges: ["Mass"]
        },
        faxNumber: {
            domains: ["Person", "ContactPoint", "Place", "Organization"],
            ranges: ["Text"]
        },
        featureList: {
            domains: ["SoftwareApplication"],
            ranges: ["Text", "URL"]
        },
        feesAndCommissionsSpecification: {
            domains: ["FinancialProduct", "FinancialService"],
            ranges: ["URL", "Text"]
        },
        fiberContent: {
            domains: ["NutritionInformation"],
            ranges: ["Mass"]
        },
        fileFormat: {
            domains: ["CreativeWork"],
            ranges: ["Text", "URL"]
        },
        fileSize: {
            domains: ["SoftwareApplication"],
            ranges: ["Text"]
        },
        firstPerformance: {
            domains: ["MusicComposition"],
            ranges: ["Event"]
        },
        flightDistance: {
            domains: ["Flight"],
            ranges: ["Distance", "Text"]
        },
        flightNumber: {
            domains: ["Flight"],
            ranges: ["Text"]
        },
        floorLimit: {
            domains: ["PaymentCard"],
            ranges: ["MonetaryAmount"]
        },
        floorSize: {
            domains: ["Accommodation"],
            ranges: ["QuantitativeValue"]
        },
        followee: {
            domains: ["FollowAction"],
            ranges: ["Organization", "Person"]
        },
        follows: {
            domains: ["Person"],
            ranges: ["Person"]
        },
        foodEstablishment: {
            domains: ["CookAction"],
            ranges: ["FoodEstablishment", "Place"]
        },
        foodEvent: {
            domains: ["CookAction"],
            ranges: ["FoodEvent"]
        },
        founder: {
            domains: ["Organization"],
            ranges: ["Person"]
        },
        foundingDate: {
            domains: ["Organization"],
            ranges: ["Date"]
        },
        foundingLocation: {
            domains: ["Organization"],
            ranges: ["Place"]
        },
        fromLocation: {
            domains: ["TransferAction", "ExerciseAction", "MoveAction"],
            ranges: ["Place"]
        },
        fuelCapacity: {
            domains: ["Vehicle"],
            ranges: ["QuantitativeValue"]
        },
        fuelConsumption: {
            domains: ["Vehicle"],
            ranges: ["QuantitativeValue"]
        },
        fuelEfficiency: {
            domains: ["Vehicle"],
            ranges: ["QuantitativeValue"]
        },
        fuelType: {
            domains: ["EngineSpecification", "Vehicle"],
            ranges: ["QualitativeValue", "Text", "URL"]
        },
        funder: {
            domains: ["Person", "CreativeWork", "Event", "Organization"],
            ranges: ["Organization", "Person"]
        },
        game: {
            domains: ["GameServer"],
            ranges: ["VideoGame"]
        },
        gameItem: {
            domains: ["Game", "VideoGameSeries"],
            ranges: ["Thing"]
        },
        gameLocation: {
            domains: ["Game", "VideoGameSeries"],
            ranges: ["URL", "PostalAddress", "Place"]
        },
        gamePlatform: {
            domains: ["VideoGame", "VideoGameSeries"],
            ranges: ["URL", "Text", "Thing"]
        },
        gameServer: {
            domains: ["VideoGame"],
            ranges: ["GameServer"]
        },
        gameTip: {
            domains: ["VideoGame"],
            ranges: ["CreativeWork"]
        },
        gender: {
            domains: ["Person"],
            ranges: ["GenderType", "Text"]
        },
        genre: {
            domains: ["CreativeWork", "MusicGroup", "BroadcastChannel"],
            ranges: ["URL", "Text"]
        },
        geo: {
            domains: ["Place"],
            ranges: ["GeoCoordinates", "GeoShape"]
        },
        geoMidpoint: {
            domains: ["GeoCircle"],
            ranges: ["GeoCoordinates"]
        },
        geoRadius: {
            domains: ["GeoCircle"],
            ranges: ["Distance", "Number", "Text"]
        },
        geographicArea: {
            domains: ["Audience"],
            ranges: ["AdministrativeArea"]
        },
        geospatiallyContains: {
            domains: ["Place"],
            ranges: ["GeospatialGeometry", "Place"]
        },
        geospatiallyCoveredBy: {
            domains: ["Place"],
            ranges: ["GeospatialGeometry", "Place"]
        },
        geospatiallyCovers: {
            domains: ["Place"],
            ranges: ["GeospatialGeometry", "Place"]
        },
        geospatiallyCrosses: {
            domains: ["Place"],
            ranges: ["GeospatialGeometry", "Place"]
        },
        geospatiallyDisjoint: {
            domains: ["Place"],
            ranges: ["GeospatialGeometry", "Place"]
        },
        geospatiallyEquals: {
            domains: ["Place"],
            ranges: ["GeospatialGeometry", "Place"]
        },
        geospatiallyIntersects: {
            domains: ["Place"],
            ranges: ["GeospatialGeometry", "Place"]
        },
        geospatiallyOverlaps: {
            domains: ["Place"],
            ranges: ["GeospatialGeometry", "Place"]
        },
        geospatiallyTouches: {
            domains: ["Place"],
            ranges: ["GeospatialGeometry", "Place"]
        },
        geospatiallyWithin: {
            domains: ["Place"],
            ranges: ["GeospatialGeometry", "Place"]
        },
        givenName: {
            domains: ["Person"],
            ranges: ["Text"]
        },
        globalLocationNumber: {
            domains: ["Person", "Place", "Organization"],
            ranges: ["Text"]
        },
        gracePeriod: {
            domains: ["LoanOrCredit"],
            ranges: ["Duration"]
        },
        grantee: {
            domains: ["DigitalDocumentPermission"],
            ranges: ["Audience", "ContactPoint", "Organization", "Person"]
        },
        greater: {
            domains: ["QualitativeValue"],
            ranges: ["QualitativeValue"]
        },
        greaterOrEqual: {
            domains: ["QualitativeValue"],
            ranges: ["QualitativeValue"]
        },
        gtin12: {
            domains: ["Product", "Demand", "Offer"],
            ranges: ["Text"]
        },
        gtin13: {
            domains: ["Product", "Demand", "Offer"],
            ranges: ["Text"]
        },
        gtin14: {
            domains: ["Product", "Demand", "Offer"],
            ranges: ["Text"]
        },
        gtin8: {
            domains: ["Product", "Demand", "Offer"],
            ranges: ["Text"]
        },
        hasBroadcastChannel: {
            domains: ["BroadcastService"],
            ranges: ["BroadcastChannel"]
        },
        hasCourseInstance: {
            domains: ["Course"],
            ranges: ["CourseInstance"]
        },
        hasDeliveryMethod: {
            domains: ["DeliveryEvent", "ParcelDelivery"],
            ranges: ["DeliveryMethod"]
        },
        hasDigitalDocumentPermission: {
            domains: ["DigitalDocument"],
            ranges: ["DigitalDocumentPermission"]
        },
        hasMap: {
            domains: ["Place"],
            ranges: ["Map", "URL"]
        },
        hasMenu: {
            domains: ["FoodEstablishment"],
            ranges: ["Menu", "Text", "URL"]
        },
        hasMenuItem: {
            domains: ["Menu", "MenuSection"],
            ranges: ["MenuItem"]
        },
        hasMenuSection: {
            domains: ["Menu", "MenuSection"],
            ranges: ["MenuSection"]
        },
        hasOccupation: {
            domains: ["Person"],
            ranges: ["Occupation"]
        },
        hasOfferCatalog: {
            domains: ["Person", "Service", "Organization"],
            ranges: ["OfferCatalog"]
        },
        hasPOS: {
            domains: ["Person", "Organization"],
            ranges: ["Place"]
        },
        hasPart: {
            domains: ["CreativeWork"],
            ranges: ["CreativeWork"]
        },
        headline: {
            domains: ["CreativeWork"],
            ranges: ["Text"]
        },
        healthCondition: {
            domains: ["PeopleAudience"],
            ranges: ["MedicalCondition"]
        },
        healthPlanNetworkId: {
            domains: ["MedicalOrganization"],
            ranges: ["Text"]
        },
        height: {
            domains: ["Person", "MediaObject", "Product", "VisualArtwork"],
            ranges: ["Distance", "QuantitativeValue"]
        },
        highPrice: {
            domains: ["AggregateOffer"],
            ranges: ["Number", "Text"]
        },
        hiringOrganization: {
            domains: ["JobPosting"],
            ranges: ["Organization"]
        },
        homeLocation: {
            domains: ["Person"],
            ranges: ["ContactPoint", "Place"]
        },
        homeTeam: {
            domains: ["SportsEvent"],
            ranges: ["Person", "SportsTeam"]
        },
        honorificPrefix: {
            domains: ["Person"],
            ranges: ["Text"]
        },
        honorificSuffix: {
            domains: ["Person"],
            ranges: ["Text"]
        },
        hospitalAffiliation: {
            domains: ["Physician"],
            ranges: ["Hospital"]
        },
        hostingOrganization: {
            domains: ["ProgramMembership"],
            ranges: ["Organization"]
        },
        hoursAvailable: {
            domains: ["LocationFeatureSpecification", "ContactPoint", "Service"],
            ranges: ["OpeningHoursSpecification"]
        },
        httpMethod: {
            domains: ["EntryPoint"],
            ranges: ["Text"]
        },
        iataCode: {
            domains: ["Airport", "Airline"],
            ranges: ["Text"]
        },
        icaoCode: {
            domains: ["Airport"],
            ranges: ["Text"]
        },
        identifier: {
            domains: ["Thing"],
            ranges: ["PropertyValue", "Text", "URL"]
        },
        illustrator: {
            domains: ["Book"],
            ranges: ["Person"]
        },
        image: {
            domains: ["Thing"],
            ranges: ["ImageObject", "URL"]
        },
        inAlbum: {
            domains: ["MusicRecording"],
            ranges: ["MusicAlbum"]
        },
        inBroadcastLineup: {
            domains: ["BroadcastChannel"],
            ranges: ["CableOrSatelliteService"]
        },
        inLanguage: {
            domains: ["WriteAction", "CreativeWork", "CommunicateAction", "Event"],
            ranges: ["Text", "Language"]
        },
        inPlaylist: {
            domains: ["MusicRecording"],
            ranges: ["MusicPlaylist"]
        },
        incentiveCompensation: {
            domains: ["JobPosting"],
            ranges: ["Text"]
        },
        includedComposition: {
            domains: ["MusicComposition"],
            ranges: ["MusicComposition"]
        },
        includedInDataCatalog: {
            domains: ["Dataset"],
            ranges: ["DataCatalog"]
        },
        includesObject: {
            domains: ["Offer", "Demand"],
            ranges: ["TypeAndQuantityNode"]
        },
        industry: {
            domains: ["JobPosting"],
            ranges: ["Text"]
        },
        ineligibleRegion: {
            domains: ["DeliveryChargeSpecification", "Offer", "Demand"],
            ranges: ["Text", "GeoShape", "Place"]
        },
        inker: {
            domains: ["VisualArtwork"],
            ranges: ["Person"]
        },
        installUrl: {
            domains: ["SoftwareApplication"],
            ranges: ["URL"]
        },
        instructor: {
            domains: ["CourseInstance"],
            ranges: ["Person"]
        },
        instrument: {
            domains: ["Action"],
            ranges: ["Thing"]
        },
        interactionStatistic: {
            domains: ["CreativeWork"],
            ranges: ["InteractionCounter"]
        },
        interactivityType: {
            domains: ["CreativeWork"],
            ranges: ["Text"]
        },
        interestRate: {
            domains: ["FinancialProduct"],
            ranges: ["Number", "QuantitativeValue"]
        },
        inventoryLevel: {
            domains: ["SomeProducts", "Demand", "Offer"],
            ranges: ["QuantitativeValue"]
        },
        isAcceptingNewPatients: {
            domains: ["MedicalOrganization"],
            ranges: ["Boolean"]
        },
        isAccessibleForFree: {
            domains: ["Place", "PublicationEvent", "CreativeWork", "Event"],
            ranges: ["Boolean"]
        },
        isAccessoryOrSparePartFor: {
            domains: ["Product"],
            ranges: ["Product"]
        },
        isBasedOn: {
            domains: ["CreativeWork"],
            ranges: ["CreativeWork", "Product", "URL"]
        },
        isConsumableFor: {
            domains: ["Product"],
            ranges: ["Product"]
        },
        isFamilyFriendly: {
            domains: ["CreativeWork"],
            ranges: ["Boolean"]
        },
        isGift: {
            domains: ["Order"],
            ranges: ["Boolean"]
        },
        isLiveBroadcast: {
            domains: ["BroadcastEvent"],
            ranges: ["Boolean"]
        },
        isPartOf: {
            domains: ["CreativeWork"],
            ranges: ["CreativeWork"]
        },
        isRelatedTo: {
            domains: ["Product", "Service"],
            ranges: ["Product", "Service"]
        },
        isSimilarTo: {
            domains: ["Product", "Service"],
            ranges: ["Product", "Service"]
        },
        isVariantOf: {
            domains: ["ProductModel"],
            ranges: ["ProductModel"]
        },
        isbn: {
            domains: ["Book"],
            ranges: ["Text"]
        },
        isicV4: {
            domains: ["Person", "Place", "Organization"],
            ranges: ["Text"]
        },
        isrcCode: {
            domains: ["MusicRecording"],
            ranges: ["Text"]
        },
        issn: {
            domains: ["Blog", "WebSite", "CreativeWorkSeries", "Dataset"],
            ranges: ["Text"]
        },
        issueNumber: {
            domains: ["PublicationIssue"],
            ranges: ["Integer", "Text"]
        },
        issuedBy: {
            domains: ["Ticket", "Permit"],
            ranges: ["Organization"]
        },
        issuedThrough: {
            domains: ["Permit"],
            ranges: ["Service"]
        },
        iswcCode: {
            domains: ["MusicComposition"],
            ranges: ["Text"]
        },
        item: {
            domains: ["DataFeedItem", "ListItem"],
            ranges: ["Thing"]
        },
        itemCondition: {
            domains: ["Product", "Demand", "Offer"],
            ranges: ["OfferItemCondition"]
        },
        itemListElement: {
            domains: ["ItemList"],
            ranges: ["ListItem", "Text", "Thing"]
        },
        itemListOrder: {
            domains: ["ItemList"],
            ranges: ["ItemListOrderType", "Text"]
        },
        itemOffered: {
            domains: ["Offer", "Demand"],
            ranges: ["Product", "Service"]
        },
        itemReviewed: {
            domains: ["AggregateRating", "Review"],
            ranges: ["Thing"]
        },
        itemShipped: {
            domains: ["ParcelDelivery"],
            ranges: ["Product"]
        },
        jobBenefits: {
            domains: ["JobPosting"],
            ranges: ["Text"]
        },
        jobLocation: {
            domains: ["JobPosting"],
            ranges: ["Place"]
        },
        jobTitle: {
            domains: ["Person"],
            ranges: ["Text"]
        },
        keywords: {
            domains: ["CreativeWork"],
            ranges: ["Text"]
        },
        knownVehicleDamages: {
            domains: ["Vehicle"],
            ranges: ["Text"]
        },
        knows: {
            domains: ["Person"],
            ranges: ["Person"]
        },
        landlord: {
            domains: ["RentAction"],
            ranges: ["Organization", "Person"]
        },
        lastReviewed: {
            domains: ["WebPage"],
            ranges: ["Date"]
        },
        latitude: {
            domains: ["GeoCoordinates"],
            ranges: ["Number", "Text"]
        },
        learningResourceType: {
            domains: ["CreativeWork"],
            ranges: ["Text"]
        },
        legalName: {
            domains: ["Organization"],
            ranges: ["Text"]
        },
        leiCode: {
            domains: ["Organization"],
            ranges: ["Text"]
        },
        lender: {
            domains: ["BorrowAction"],
            ranges: ["Organization", "Person"]
        },
        lesser: {
            domains: ["QualitativeValue"],
            ranges: ["QualitativeValue"]
        },
        lesserOrEqual: {
            domains: ["QualitativeValue"],
            ranges: ["QualitativeValue"]
        },
        letterer: {
            domains: ["VisualArtwork"],
            ranges: ["Person"]
        },
        license: {
            domains: ["CreativeWork"],
            ranges: ["CreativeWork", "URL"]
        },
        line: {
            domains: ["GeoShape"],
            ranges: ["Text"]
        },
        liveBlogUpdate: {
            domains: ["LiveBlogPosting"],
            ranges: ["BlogPosting"]
        },
        loanRepaymentForm: {
            domains: ["LoanOrCredit"],
            ranges: ["RepaymentSpecification"]
        },
        loanTerm: {
            domains: ["LoanOrCredit"],
            ranges: ["QuantitativeValue"]
        },
        loanType: {
            domains: ["LoanOrCredit"],
            ranges: ["Text", "URL"]
        },
        location: {
            domains: ["Action", "Organization", "Event"],
            ranges: ["Text", "PostalAddress", "Place"]
        },
        locationCreated: {
            domains: ["CreativeWork"],
            ranges: ["Place"]
        },
        lodgingUnitDescription: {
            domains: ["LodgingReservation"],
            ranges: ["Text"]
        },
        lodgingUnitType: {
            domains: ["LodgingReservation"],
            ranges: ["QualitativeValue", "Text"]
        },
        logo: {
            domains: ["Organization", "Brand", "Place", "Product", "Service"],
            ranges: ["URL", "ImageObject"]
        },
        longitude: {
            domains: ["GeoCoordinates"],
            ranges: ["Number", "Text"]
        },
        loser: {
            domains: ["WinAction"],
            ranges: ["Person"]
        },
        lowPrice: {
            domains: ["AggregateOffer"],
            ranges: ["Number", "Text"]
        },
        lyricist: {
            domains: ["MusicComposition"],
            ranges: ["Person"]
        },
        lyrics: {
            domains: ["MusicComposition"],
            ranges: ["CreativeWork"]
        },
        mainContentOfPage: {
            domains: ["WebPage"],
            ranges: ["WebPageElement"]
        },
        mainEntity: {
            domains: ["CreativeWork"],
            ranges: ["Thing"]
        },
        mainEntityOfPage: {
            domains: ["Thing"],
            ranges: ["CreativeWork", "URL"]
        },
        makesOffer: {
            domains: ["Person", "Organization"],
            ranges: ["Offer"]
        },
        manufacturer: {
            domains: ["Product"],
            ranges: ["Organization"]
        },
        mapType: {
            domains: ["Map"],
            ranges: ["MapCategoryType"]
        },
        material: {
            domains: ["Product", "CreativeWork"],
            ranges: ["URL", "Text", "Product"]
        },
        maxPrice: {
            domains: ["PriceSpecification"],
            ranges: ["Number"]
        },
        maxValue: {
            domains: ["PropertyValue", "QuantitativeValue", "PropertyValueSpecification"],
            ranges: ["Number"]
        },
        maximumAttendeeCapacity: {
            domains: ["Place", "Event"],
            ranges: ["Integer"]
        },
        mealService: {
            domains: ["Flight"],
            ranges: ["Text"]
        },
        measurementTechnique: {
            domains: ["PropertyValue", "DataDownload", "DataCatalog", "Dataset"],
            ranges: ["URL", "Text"]
        },
        medicalSpecialty: {
            domains: ["Physician", "Hospital", "MedicalOrganization"],
            ranges: ["MedicalSpecialty"]
        },
        meetsEmissionStandard: {
            domains: ["Vehicle"],
            ranges: ["QualitativeValue", "Text", "URL"]
        },
        member: {
            domains: ["Organization", "ProgramMembership"],
            ranges: ["Organization", "Person"]
        },
        memberOf: {
            domains: ["Person", "Organization"],
            ranges: ["Organization", "ProgramMembership"]
        },
        membershipNumber: {
            domains: ["ProgramMembership"],
            ranges: ["Text"]
        },
        memoryRequirements: {
            domains: ["SoftwareApplication"],
            ranges: ["Text", "URL"]
        },
        mentions: {
            domains: ["CreativeWork"],
            ranges: ["Thing"]
        },
        menuAddOn: {
            domains: ["MenuItem"],
            ranges: ["MenuItem", "MenuSection"]
        },
        messageAttachment: {
            domains: ["Message"],
            ranges: ["CreativeWork"]
        },
        mileageFromOdometer: {
            domains: ["Vehicle"],
            ranges: ["QuantitativeValue"]
        },
        minPrice: {
            domains: ["PriceSpecification"],
            ranges: ["Number"]
        },
        minValue: {
            domains: ["PropertyValue", "QuantitativeValue", "PropertyValueSpecification"],
            ranges: ["Number"]
        },
        minimumPaymentDue: {
            domains: ["Invoice"],
            ranges: ["MonetaryAmount", "PriceSpecification"]
        },
        model: {
            domains: ["Product"],
            ranges: ["ProductModel", "Text"]
        },
        modelDate: {
            domains: ["Vehicle"],
            ranges: ["Date"]
        },
        modifiedTime: {
            domains: ["Reservation"],
            ranges: ["DateTime"]
        },
        monthlyMinimumRepaymentAmount: {
            domains: ["CreditCard"],
            ranges: ["MonetaryAmount", "Number"]
        },
        mpn: {
            domains: ["Product", "Demand", "Offer"],
            ranges: ["Text"]
        },
        multipleValues: {
            domains: ["PropertyValueSpecification"],
            ranges: ["Boolean"]
        },
        musicArrangement: {
            domains: ["MusicComposition"],
            ranges: ["MusicComposition"]
        },
        musicBy: {
            domains: ["VideoGame", "VideoObject", "Episode", "RadioSeries", "Clip", "Movie", "VideoGameSeries", "MovieSeries", "TVSeries"],
            ranges: ["Person", "MusicGroup"]
        },
        musicCompositionForm: {
            domains: ["MusicComposition"],
            ranges: ["Text"]
        },
        musicReleaseFormat: {
            domains: ["MusicRelease"],
            ranges: ["MusicReleaseFormatType"]
        },
        musicalKey: {
            domains: ["MusicComposition"],
            ranges: ["Text"]
        },
        naics: {
            domains: ["Person", "Organization"],
            ranges: ["Text"]
        },
        name: {
            domains: ["Thing"],
            ranges: ["Text"]
        },
        nationality: {
            domains: ["Person"],
            ranges: ["Country"]
        },
        netWorth: {
            domains: ["Person"],
            ranges: ["MonetaryAmount", "PriceSpecification"]
        },
        nextItem: {
            domains: ["ListItem"],
            ranges: ["ListItem"]
        },
        nonEqual: {
            domains: ["QualitativeValue"],
            ranges: ["QualitativeValue"]
        },
        numAdults: {
            domains: ["LodgingReservation"],
            ranges: ["Integer", "QuantitativeValue"]
        },
        numChildren: {
            domains: ["LodgingReservation"],
            ranges: ["Integer", "QuantitativeValue"]
        },
        numTracks: {
            domains: ["MusicPlaylist"],
            ranges: ["Integer"]
        },
        numberOfAirbags: {
            domains: ["Vehicle"],
            ranges: ["Number", "Text"]
        },
        numberOfAxles: {
            domains: ["Vehicle"],
            ranges: ["Number", "QuantitativeValue"]
        },
        numberOfBeds: {
            domains: ["BedDetails"],
            ranges: ["Number"]
        },
        numberOfDoors: {
            domains: ["Vehicle"],
            ranges: ["Number", "QuantitativeValue"]
        },
        numberOfEmployees: {
            domains: ["BusinessAudience", "Organization"],
            ranges: ["QuantitativeValue"]
        },
        numberOfEpisodes: {
            domains: ["VideoGameSeries", "TVSeries", "RadioSeries"],
            ranges: ["Integer"]
        },
        numberOfForwardGears: {
            domains: ["Vehicle"],
            ranges: ["Number", "QuantitativeValue"]
        },
        numberOfItems: {
            domains: ["ItemList"],
            ranges: ["Integer"]
        },
        numberOfPages: {
            domains: ["Book"],
            ranges: ["Integer"]
        },
        numberOfPlayers: {
            domains: ["Game", "VideoGameSeries"],
            ranges: ["QuantitativeValue"]
        },
        numberOfPreviousOwners: {
            domains: ["Vehicle"],
            ranges: ["Number", "QuantitativeValue"]
        },
        numberOfRooms: {
            domains: ["SingleFamilyResidence", "Apartment", "Accommodation", "House", "Suite"],
            ranges: ["Number", "QuantitativeValue"]
        },
        numberOfSeasons: {
            domains: ["VideoGameSeries", "TVSeries", "RadioSeries"],
            ranges: ["Integer"]
        },
        numberedPosition: {
            domains: ["OrganizationRole"],
            ranges: ["Number"]
        },
        nutrition: {
            domains: ["MenuItem", "Recipe"],
            ranges: ["NutritionInformation"]
        },
        object: {
            domains: ["Action"],
            ranges: ["Thing"]
        },
        occupancy: {
            domains: ["SingleFamilyResidence", "HotelRoom", "Apartment", "Suite"],
            ranges: ["QuantitativeValue"]
        },
        occupationalCategory: {
            domains: ["JobPosting"],
            ranges: ["Text"]
        },
        offerCount: {
            domains: ["AggregateOffer"],
            ranges: ["Integer"]
        },
        offeredBy: {
            domains: ["Offer"],
            ranges: ["Organization", "Person"]
        },
        offers: {
            domains: ["Product", "AggregateOffer", "Service", "MenuItem", "CreativeWork", "Event"],
            ranges: ["Offer"]
        },
        openingHours: {
            domains: ["LocalBusiness", "CivicStructure"],
            ranges: ["Text"]
        },
        openingHoursSpecification: {
            domains: ["Place"],
            ranges: ["OpeningHoursSpecification"]
        },
        opens: {
            domains: ["OpeningHoursSpecification"],
            ranges: ["Time"]
        },
        operatingSystem: {
            domains: ["SoftwareApplication"],
            ranges: ["Text"]
        },
        opponent: {
            domains: ["ExerciseAction"],
            ranges: ["Person"]
        },
        orderDate: {
            domains: ["Order"],
            ranges: ["DateTime"]
        },
        orderDelivery: {
            domains: ["OrderItem", "Order"],
            ranges: ["ParcelDelivery"]
        },
        orderItemNumber: {
            domains: ["OrderItem"],
            ranges: ["Text"]
        },
        orderItemStatus: {
            domains: ["OrderItem"],
            ranges: ["OrderStatus"]
        },
        orderNumber: {
            domains: ["Order"],
            ranges: ["Text"]
        },
        orderQuantity: {
            domains: ["OrderItem"],
            ranges: ["Number"]
        },
        orderStatus: {
            domains: ["Order"],
            ranges: ["OrderStatus"]
        },
        orderedItem: {
            domains: ["OrderItem", "Order"],
            ranges: ["Product", "OrderItem"]
        },
        organizer: {
            domains: ["Event"],
            ranges: ["Organization", "Person"]
        },
        originAddress: {
            domains: ["ParcelDelivery"],
            ranges: ["PostalAddress"]
        },
        ownedFrom: {
            domains: ["OwnershipInfo"],
            ranges: ["DateTime"]
        },
        ownedThrough: {
            domains: ["OwnershipInfo"],
            ranges: ["DateTime"]
        },
        owns: {
            domains: ["Person", "Organization"],
            ranges: ["OwnershipInfo", "Product"]
        },
        pageEnd: {
            domains: ["Article", "PublicationIssue", "PublicationVolume"],
            ranges: ["Integer", "Text"]
        },
        pageStart: {
            domains: ["Article", "PublicationIssue", "PublicationVolume"],
            ranges: ["Integer", "Text"]
        },
        pagination: {
            domains: ["Article", "PublicationIssue", "PublicationVolume"],
            ranges: ["Text"]
        },
        parent: {
            domains: ["Person"],
            ranges: ["Person"]
        },
        parentItem: {
            domains: ["Comment"],
            ranges: ["Question"]
        },
        parentOrganization: {
            domains: ["Organization"],
            ranges: ["Organization"]
        },
        parentService: {
            domains: ["BroadcastService"],
            ranges: ["BroadcastService"]
        },
        partOfEpisode: {
            domains: ["Clip"],
            ranges: ["Episode"]
        },
        partOfInvoice: {
            domains: ["Order"],
            ranges: ["Invoice"]
        },
        partOfOrder: {
            domains: ["ParcelDelivery"],
            ranges: ["Order"]
        },
        partOfSeason: {
            domains: ["Episode", "Clip"],
            ranges: ["CreativeWorkSeason"]
        },
        partOfSeries: {
            domains: ["Episode", "Clip"],
            ranges: ["CreativeWorkSeries"]
        },
        participant: {
            domains: ["Action"],
            ranges: ["Organization", "Person"]
        },
        partySize: {
            domains: ["TaxiReservation", "FoodEstablishmentReservation"],
            ranges: ["Integer", "QuantitativeValue"]
        },
        passengerPriorityStatus: {
            domains: ["FlightReservation"],
            ranges: ["QualitativeValue", "Text"]
        },
        passengerSequenceNumber: {
            domains: ["FlightReservation"],
            ranges: ["Text"]
        },
        payload: {
            domains: ["Vehicle"],
            ranges: ["QuantitativeValue"]
        },
        paymentAccepted: {
            domains: ["LocalBusiness"],
            ranges: ["Text"]
        },
        paymentDueDate: {
            domains: ["Order", "Invoice"],
            ranges: ["DateTime"]
        },
        paymentMethod: {
            domains: ["Order", "Invoice"],
            ranges: ["PaymentMethod"]
        },
        paymentMethodId: {
            domains: ["Order", "Invoice"],
            ranges: ["Text"]
        },
        paymentStatus: {
            domains: ["Invoice"],
            ranges: ["PaymentStatusType", "Text"]
        },
        paymentUrl: {
            domains: ["Order"],
            ranges: ["URL"]
        },
        penciler: {
            domains: ["VisualArtwork"],
            ranges: ["Person"]
        },
        performTime: {
            domains: ["HowToDirection", "HowTo"],
            ranges: ["Duration"]
        },
        performer: {
            domains: ["Event"],
            ranges: ["Organization", "Person"]
        },
        performerIn: {
            domains: ["Person"],
            ranges: ["Event"]
        },
        permissionType: {
            domains: ["DigitalDocumentPermission"],
            ranges: ["DigitalDocumentPermissionType"]
        },
        permissions: {
            domains: ["SoftwareApplication"],
            ranges: ["Text"]
        },
        permitAudience: {
            domains: ["Permit"],
            ranges: ["Audience"]
        },
        permittedUsage: {
            domains: ["Accommodation"],
            ranges: ["Text"]
        },
        petsAllowed: {
            domains: ["LodgingBusiness", "Accommodation"],
            ranges: ["Text", "Boolean"]
        },
        photo: {
            domains: ["Place"],
            ranges: ["ImageObject", "Photograph"]
        },
        pickupLocation: {
            domains: ["TaxiReservation", "RentalCarReservation"],
            ranges: ["Place"]
        },
        pickupTime: {
            domains: ["TaxiReservation", "RentalCarReservation"],
            ranges: ["DateTime"]
        },
        playMode: {
            domains: ["VideoGame", "VideoGameSeries"],
            ranges: ["GamePlayMode"]
        },
        playerType: {
            domains: ["MediaObject"],
            ranges: ["Text"]
        },
        playersOnline: {
            domains: ["GameServer"],
            ranges: ["Integer"]
        },
        polygon: {
            domains: ["GeoShape"],
            ranges: ["Text"]
        },
        position: {
            domains: ["CreativeWork", "ListItem"],
            ranges: ["Integer", "Text"]
        },
        postOfficeBoxNumber: {
            domains: ["PostalAddress"],
            ranges: ["Text"]
        },
        postalCode: {
            domains: ["PostalAddress", "GeoShape", "GeoCoordinates"],
            ranges: ["Text"]
        },
        potentialAction: {
            domains: ["Thing"],
            ranges: ["Action"]
        },
        predecessorOf: {
            domains: ["ProductModel"],
            ranges: ["ProductModel"]
        },
        prepTime: {
            domains: ["HowToDirection", "HowTo"],
            ranges: ["Duration"]
        },
        previousItem: {
            domains: ["ListItem"],
            ranges: ["ListItem"]
        },
        previousStartDate: {
            domains: ["Event"],
            ranges: ["Date"]
        },
        price: {
            domains: ["Offer", "PriceSpecification", "TradeAction"],
            ranges: ["Text", "Number"]
        },
        priceComponent: {
            domains: ["CompoundPriceSpecification"],
            ranges: ["UnitPriceSpecification"]
        },
        priceCurrency: {
            domains: ["Reservation", "Ticket", "PriceSpecification", "Offer"],
            ranges: ["Text"]
        },
        priceRange: {
            domains: ["LocalBusiness"],
            ranges: ["Text"]
        },
        priceSpecification: {
            domains: ["Offer", "TradeAction", "Demand"],
            ranges: ["PriceSpecification"]
        },
        priceType: {
            domains: ["UnitPriceSpecification"],
            ranges: ["Text"]
        },
        priceValidUntil: {
            domains: ["Offer"],
            ranges: ["Date"]
        },
        primaryImageOfPage: {
            domains: ["WebPage"],
            ranges: ["ImageObject"]
        },
        printColumn: {
            domains: ["NewsArticle"],
            ranges: ["Text"]
        },
        printEdition: {
            domains: ["NewsArticle"],
            ranges: ["Text"]
        },
        printPage: {
            domains: ["NewsArticle"],
            ranges: ["Text"]
        },
        printSection: {
            domains: ["NewsArticle"],
            ranges: ["Text"]
        },
        processingTime: {
            domains: ["ServiceChannel"],
            ranges: ["Duration"]
        },
        processorRequirements: {
            domains: ["SoftwareApplication"],
            ranges: ["Text"]
        },
        producer: {
            domains: ["CreativeWork"],
            ranges: ["Organization", "Person"]
        },
        productID: {
            domains: ["Product"],
            ranges: ["Text"]
        },
        productSupported: {
            domains: ["ContactPoint"],
            ranges: ["Product", "Text"]
        },
        productionCompany: {
            domains: ["Episode", "RadioSeries", "Movie", "MediaObject", "VideoGameSeries", "MovieSeries", "TVSeries"],
            ranges: ["Organization"]
        },
        productionDate: {
            domains: ["Product", "Vehicle"],
            ranges: ["Date"]
        },
        proficiencyLevel: {
            domains: ["TechArticle"],
            ranges: ["Text"]
        },
        programMembershipUsed: {
            domains: ["Reservation"],
            ranges: ["ProgramMembership"]
        },
        programName: {
            domains: ["ProgramMembership"],
            ranges: ["Text"]
        },
        programmingLanguage: {
            domains: ["SoftwareSourceCode"],
            ranges: ["ComputerLanguage", "Text"]
        },
        programmingModel: {
            domains: ["APIReference"],
            ranges: ["Text"]
        },
        propertyID: {
            domains: ["PropertyValue"],
            ranges: ["Text", "URL"]
        },
        proteinContent: {
            domains: ["NutritionInformation"],
            ranges: ["Mass"]
        },
        provider: {
            domains: ["Flight", "ParcelDelivery", "Service", "BusTrip", "TrainTrip", "Invoice", "Reservation", "CreativeWork"],
            ranges: ["Organization", "Person"]
        },
        providerMobility: {
            domains: ["Service"],
            ranges: ["Text"]
        },
        providesBroadcastService: {
            domains: ["BroadcastChannel"],
            ranges: ["BroadcastService"]
        },
        providesService: {
            domains: ["ServiceChannel"],
            ranges: ["Service"]
        },
        publicAccess: {
            domains: ["Place"],
            ranges: ["Boolean"]
        },
        publication: {
            domains: ["CreativeWork"],
            ranges: ["PublicationEvent"]
        },
        publishedBy: {
            domains: ["PublicationEvent"],
            ranges: ["Organization", "Person"]
        },
        publishedOn: {
            domains: ["PublicationEvent"],
            ranges: ["BroadcastService"]
        },
        publisher: {
            domains: ["CreativeWork"],
            ranges: ["Organization", "Person"]
        },
        publisherImprint: {
            domains: ["CreativeWork"],
            ranges: ["Organization"]
        },
        publishingPrinciples: {
            domains: ["Person", "CreativeWork", "Organization"],
            ranges: ["URL", "CreativeWork"]
        },
        purchaseDate: {
            domains: ["Product", "Vehicle"],
            ranges: ["Date"]
        },
        purpose: {
            domains: ["AllocateAction", "PayAction"],
            ranges: ["Thing", "MedicalDevicePurpose"]
        },
        qualifications: {
            domains: ["JobPosting"],
            ranges: ["Text"]
        },
        query: {
            domains: ["SearchAction"],
            ranges: ["Text"]
        },
        quest: {
            domains: ["Game", "VideoGameSeries"],
            ranges: ["Thing"]
        },
        question: {
            domains: ["AskAction"],
            ranges: ["Question"]
        },
        ratingCount: {
            domains: ["AggregateRating"],
            ranges: ["Integer"]
        },
        ratingValue: {
            domains: ["Rating"],
            ranges: ["Number", "Text"]
        },
        readonlyValue: {
            domains: ["PropertyValueSpecification"],
            ranges: ["Boolean"]
        },
        realEstateAgent: {
            domains: ["RentAction"],
            ranges: ["RealEstateAgent"]
        },
        recipe: {
            domains: ["CookAction"],
            ranges: ["Recipe"]
        },
        recipeCategory: {
            domains: ["Recipe"],
            ranges: ["Text"]
        },
        recipeCuisine: {
            domains: ["Recipe"],
            ranges: ["Text"]
        },
        recipeIngredient: {
            domains: ["Recipe"],
            ranges: ["Text"]
        },
        recipeInstructions: {
            domains: ["Recipe"],
            ranges: ["CreativeWork", "ItemList", "Text"]
        },
        recipeYield: {
            domains: ["Recipe"],
            ranges: ["QuantitativeValue", "Text"]
        },
        recipient: {
            domains: ["DonateAction", "ReturnAction", "GiveAction", "CommunicateAction", "PayAction", "SendAction", "TipAction", "Message", "AuthorizeAction"],
            ranges: ["Organization", "Audience", "ContactPoint", "Person"]
        },
        recordLabel: {
            domains: ["MusicRelease"],
            ranges: ["Organization"]
        },
        recordedAs: {
            domains: ["MusicComposition"],
            ranges: ["MusicRecording"]
        },
        recordedAt: {
            domains: ["CreativeWork"],
            ranges: ["Event"]
        },
        recordedIn: {
            domains: ["Event"],
            ranges: ["CreativeWork"]
        },
        recordingOf: {
            domains: ["MusicRecording"],
            ranges: ["MusicComposition"]
        },
        recourseLoan: {
            domains: ["LoanOrCredit"],
            ranges: ["Boolean"]
        },
        referenceQuantity: {
            domains: ["UnitPriceSpecification"],
            ranges: ["QuantitativeValue"]
        },
        referencesOrder: {
            domains: ["Invoice"],
            ranges: ["Order"]
        },
        regionsAllowed: {
            domains: ["MediaObject"],
            ranges: ["Place"]
        },
        relatedLink: {
            domains: ["WebPage"],
            ranges: ["URL"]
        },
        relatedTo: {
            domains: ["Person"],
            ranges: ["Person"]
        },
        releaseDate: {
            domains: ["Product"],
            ranges: ["Date"]
        },
        releaseNotes: {
            domains: ["SoftwareApplication"],
            ranges: ["Text", "URL"]
        },
        releaseOf: {
            domains: ["MusicRelease"],
            ranges: ["MusicAlbum"]
        },
        releasedEvent: {
            domains: ["CreativeWork"],
            ranges: ["PublicationEvent"]
        },
        relevantOccupation: {
            domains: ["JobPosting"],
            ranges: ["Occupation"]
        },
        remainingAttendeeCapacity: {
            domains: ["Event"],
            ranges: ["Integer"]
        },
        renegotiableLoan: {
            domains: ["LoanOrCredit"],
            ranges: ["Boolean"]
        },
        replacee: {
            domains: ["ReplaceAction"],
            ranges: ["Thing"]
        },
        replacer: {
            domains: ["ReplaceAction"],
            ranges: ["Thing"]
        },
        reportNumber: {
            domains: ["Report"],
            ranges: ["Text"]
        },
        representativeOfPage: {
            domains: ["ImageObject"],
            ranges: ["Boolean"]
        },
        requiredCollateral: {
            domains: ["LoanOrCredit"],
            ranges: ["Text", "Thing"]
        },
        requiredGender: {
            domains: ["PeopleAudience"],
            ranges: ["Text"]
        },
        requiredMaxAge: {
            domains: ["PeopleAudience"],
            ranges: ["Integer"]
        },
        requiredMinAge: {
            domains: ["PeopleAudience"],
            ranges: ["Integer"]
        },
        requiredQuantity: {
            domains: ["HowToItem"],
            ranges: ["Number", "QuantitativeValue", "Text"]
        },
        requiresSubscription: {
            domains: ["MediaObject"],
            ranges: ["Boolean"]
        },
        reservationFor: {
            domains: ["Reservation"],
            ranges: ["Thing"]
        },
        reservationId: {
            domains: ["Reservation"],
            ranges: ["Text"]
        },
        reservationStatus: {
            domains: ["Reservation"],
            ranges: ["ReservationStatusType"]
        },
        reservedTicket: {
            domains: ["Reservation"],
            ranges: ["Ticket"]
        },
        responsibilities: {
            domains: ["JobPosting"],
            ranges: ["Text"]
        },
        result: {
            domains: ["Action"],
            ranges: ["Thing"]
        },
        resultComment: {
            domains: ["CommentAction", "ReplyAction"],
            ranges: ["Comment"]
        },
        resultReview: {
            domains: ["ReviewAction"],
            ranges: ["Review"]
        },
        review: {
            domains: ["Product", "Service", "Offer", "Brand", "Place", "Organization", "CreativeWork", "Event"],
            ranges: ["Review"]
        },
        reviewAspect: {
            domains: ["Rating", "Review"],
            ranges: ["Text"]
        },
        reviewBody: {
            domains: ["Review"],
            ranges: ["Text"]
        },
        reviewCount: {
            domains: ["AggregateRating"],
            ranges: ["Integer"]
        },
        reviewRating: {
            domains: ["Review"],
            ranges: ["Rating"]
        },
        reviewedBy: {
            domains: ["WebPage"],
            ranges: ["Organization", "Person"]
        },
        roleName: {
            domains: ["Role"],
            ranges: ["Text", "URL"]
        },
        roofLoad: {
            domains: ["Car"],
            ranges: ["QuantitativeValue"]
        },
        rsvpResponse: {
            domains: ["RsvpAction"],
            ranges: ["RsvpResponseType"]
        },
        runtimePlatform: {
            domains: ["SoftwareSourceCode"],
            ranges: ["Text"]
        },
        salaryCurrency: {
            domains: ["JobPosting", "EmployeeRole"],
            ranges: ["Text"]
        },
        sameAs: {
            domains: ["Thing"],
            ranges: ["URL"]
        },
        saturatedFatContent: {
            domains: ["NutritionInformation"],
            ranges: ["Mass"]
        },
        scheduledPaymentDate: {
            domains: ["Invoice"],
            ranges: ["Date"]
        },
        scheduledTime: {
            domains: ["PlanAction"],
            ranges: ["DateTime"]
        },
        schemaVersion: {
            domains: ["CreativeWork"],
            ranges: ["Text", "URL"]
        },
        screenCount: {
            domains: ["MovieTheater"],
            ranges: ["Number"]
        },
        screenshot: {
            domains: ["SoftwareApplication"],
            ranges: ["ImageObject", "URL"]
        },
        seatNumber: {
            domains: ["Seat"],
            ranges: ["Text"]
        },
        seatRow: {
            domains: ["Seat"],
            ranges: ["Text"]
        },
        seatSection: {
            domains: ["Seat"],
            ranges: ["Text"]
        },
        seatingCapacity: {
            domains: ["Vehicle"],
            ranges: ["Number", "QuantitativeValue"]
        },
        seatingType: {
            domains: ["Seat"],
            ranges: ["QualitativeValue", "Text"]
        },
        securityScreening: {
            domains: ["FlightReservation"],
            ranges: ["Text"]
        },
        seeks: {
            domains: ["Person", "Organization"],
            ranges: ["Demand"]
        },
        seller: {
            domains: ["Offer", "Demand", "Flight", "Order", "BuyAction"],
            ranges: ["Organization", "Person"]
        },
        sender: {
            domains: ["ReceiveAction", "Message"],
            ranges: ["Organization", "Audience", "Person"]
        },
        serialNumber: {
            domains: ["Demand", "IndividualProduct", "Offer"],
            ranges: ["Text"]
        },
        serverStatus: {
            domains: ["GameServer"],
            ranges: ["GameServerStatus"]
        },
        servesCuisine: {
            domains: ["FoodEstablishment"],
            ranges: ["Text"]
        },
        serviceLocation: {
            domains: ["ServiceChannel"],
            ranges: ["Place"]
        },
        serviceOperator: {
            domains: ["GovernmentService"],
            ranges: ["Organization"]
        },
        serviceOutput: {
            domains: ["Service"],
            ranges: ["Thing"]
        },
        servicePhone: {
            domains: ["ServiceChannel"],
            ranges: ["ContactPoint"]
        },
        servicePostalAddress: {
            domains: ["ServiceChannel"],
            ranges: ["PostalAddress"]
        },
        serviceSmsNumber: {
            domains: ["ServiceChannel"],
            ranges: ["ContactPoint"]
        },
        serviceType: {
            domains: ["Service"],
            ranges: ["Text"]
        },
        serviceUrl: {
            domains: ["ServiceChannel"],
            ranges: ["URL"]
        },
        servingSize: {
            domains: ["NutritionInformation"],
            ranges: ["Text"]
        },
        sharedContent: {
            domains: ["SocialMediaPosting"],
            ranges: ["CreativeWork"]
        },
        sibling: {
            domains: ["Person"],
            ranges: ["Person"]
        },
        significantLink: {
            domains: ["WebPage"],
            ranges: ["URL"]
        },
        skills: {
            domains: ["JobPosting"],
            ranges: ["Text"]
        },
        sku: {
            domains: ["Product", "Demand", "Offer"],
            ranges: ["Text"]
        },
        smokingAllowed: {
            domains: ["Place"],
            ranges: ["Boolean"]
        },
        sodiumContent: {
            domains: ["NutritionInformation"],
            ranges: ["Mass"]
        },
        softwareAddOn: {
            domains: ["SoftwareApplication"],
            ranges: ["SoftwareApplication"]
        },
        softwareHelp: {
            domains: ["SoftwareApplication"],
            ranges: ["CreativeWork"]
        },
        softwareRequirements: {
            domains: ["SoftwareApplication"],
            ranges: ["Text", "URL"]
        },
        softwareVersion: {
            domains: ["SoftwareApplication"],
            ranges: ["Text"]
        },
        sourceOrganization: {
            domains: ["CreativeWork"],
            ranges: ["Organization"]
        },
        spatialCoverage: {
            domains: ["CreativeWork"],
            ranges: ["Place"]
        },
        speakable: {
            domains: ["WebPage", "Article"],
            ranges: ["URL", "SpeakableSpecification"]
        },
        specialCommitments: {
            domains: ["JobPosting"],
            ranges: ["Text"]
        },
        specialOpeningHoursSpecification: {
            domains: ["Place"],
            ranges: ["OpeningHoursSpecification"]
        },
        specialty: {
            domains: ["WebPage"],
            ranges: ["Specialty"]
        },
        speed: {
            domains: ["Vehicle"],
            ranges: ["QuantitativeValue"]
        },
        sponsor: {
            domains: ["Person", "CreativeWork", "Event", "Organization"],
            ranges: ["Organization", "Person"]
        },
        sport: {
            domains: ["SportsOrganization"],
            ranges: ["Text", "URL"]
        },
        sportsActivityLocation: {
            domains: ["ExerciseAction"],
            ranges: ["SportsActivityLocation"]
        },
        sportsEvent: {
            domains: ["ExerciseAction"],
            ranges: ["SportsEvent"]
        },
        sportsTeam: {
            domains: ["ExerciseAction"],
            ranges: ["SportsTeam"]
        },
        spouse: {
            domains: ["Person"],
            ranges: ["Person"]
        },
        starRating: {
            domains: ["LodgingBusiness", "FoodEstablishment"],
            ranges: ["Rating"]
        },
        startDate: {
            domains: ["Role", "CreativeWorkSeries", "Event"],
            ranges: ["Date", "DateTime"]
        },
        startTime: {
            domains: ["Action", "FoodEstablishmentReservation"],
            ranges: ["DateTime"]
        },
        steeringPosition: {
            domains: ["Vehicle"],
            ranges: ["SteeringPositionValue"]
        },
        step: {
            domains: ["HowTo"],
            ranges: ["CreativeWork", "HowToSection", "HowToStep", "Text"]
        },
        stepValue: {
            domains: ["PropertyValueSpecification"],
            ranges: ["Number"]
        },
        storageRequirements: {
            domains: ["SoftwareApplication"],
            ranges: ["Text", "URL"]
        },
        streetAddress: {
            domains: ["PostalAddress"],
            ranges: ["Text"]
        },
        subEvent: {
            domains: ["Event"],
            ranges: ["Event"]
        },
        subOrganization: {
            domains: ["Organization"],
            ranges: ["Organization"]
        },
        subReservation: {
            domains: ["ReservationPackage"],
            ranges: ["Reservation"]
        },
        subjectOf: {
            domains: ["Thing"],
            ranges: ["CreativeWork", "Event"]
        },
        subtitleLanguage: {
            domains: ["TVEpisode", "Movie", "ScreeningEvent"],
            ranges: ["Text", "Language"]
        },
        successorOf: {
            domains: ["ProductModel"],
            ranges: ["ProductModel"]
        },
        sugarContent: {
            domains: ["NutritionInformation"],
            ranges: ["Mass"]
        },
        suggestedAnswer: {
            domains: ["Question"],
            ranges: ["Answer"]
        },
        suggestedGender: {
            domains: ["PeopleAudience"],
            ranges: ["Text"]
        },
        suggestedMaxAge: {
            domains: ["PeopleAudience"],
            ranges: ["Number"]
        },
        suggestedMinAge: {
            domains: ["PeopleAudience"],
            ranges: ["Number"]
        },
        suitableForDiet: {
            domains: ["MenuItem", "Recipe"],
            ranges: ["RestrictedDiet"]
        },
        superEvent: {
            domains: ["Event"],
            ranges: ["Event"]
        },
        supersededBy: {
            domains: ["Enumeration"],
            ranges: ["Class", "Enumeration", "Property"]
        },
        supply: {
            domains: ["HowToDirection", "HowTo"],
            ranges: ["Text", "HowToSupply"]
        },
        supportingData: {
            domains: ["SoftwareApplication"],
            ranges: ["DataFeed"]
        },
        target: {
            domains: ["Action"],
            ranges: ["EntryPoint"]
        },
        targetCollection: {
            domains: ["UpdateAction"],
            ranges: ["Thing"]
        },
        targetDescription: {
            domains: ["AlignmentObject"],
            ranges: ["Text"]
        },
        targetName: {
            domains: ["AlignmentObject"],
            ranges: ["Text"]
        },
        targetPlatform: {
            domains: ["APIReference"],
            ranges: ["Text"]
        },
        targetProduct: {
            domains: ["SoftwareSourceCode"],
            ranges: ["SoftwareApplication"]
        },
        targetUrl: {
            domains: ["AlignmentObject"],
            ranges: ["URL"]
        },
        taxID: {
            domains: ["Person", "Organization"],
            ranges: ["Text"]
        },
        telephone: {
            domains: ["Person", "ContactPoint", "Place", "Organization"],
            ranges: ["Text"]
        },
        temporalCoverage: {
            domains: ["CreativeWork"],
            ranges: ["DateTime", "Text", "URL"]
        },
        termsOfService: {
            domains: ["Service"],
            ranges: ["Text", "URL"]
        },
        text: {
            domains: ["CreativeWork"],
            ranges: ["Text"]
        },
        thumbnail: {
            domains: ["VideoObject", "ImageObject"],
            ranges: ["ImageObject"]
        },
        thumbnailUrl: {
            domains: ["CreativeWork"],
            ranges: ["URL"]
        },
        tickerSymbol: {
            domains: ["Corporation"],
            ranges: ["Text"]
        },
        ticketNumber: {
            domains: ["Ticket"],
            ranges: ["Text"]
        },
        ticketToken: {
            domains: ["Ticket"],
            ranges: ["Text", "URL"]
        },
        ticketedSeat: {
            domains: ["Ticket"],
            ranges: ["Seat"]
        },
        timeRequired: {
            domains: ["CreativeWork"],
            ranges: ["Duration"]
        },
        title: {
            domains: ["JobPosting"],
            ranges: ["Text"]
        },
        toLocation: {
            domains: ["InsertAction", "TransferAction", "ExerciseAction", "MoveAction"],
            ranges: ["Place"]
        },
        toRecipient: {
            domains: ["Message"],
            ranges: ["Audience", "ContactPoint", "Organization", "Person"]
        },
        tongueWeight: {
            domains: ["Vehicle"],
            ranges: ["QuantitativeValue"]
        },
        tool: {
            domains: ["HowToDirection", "HowTo"],
            ranges: ["Text", "HowToTool"]
        },
        torque: {
            domains: ["EngineSpecification"],
            ranges: ["QuantitativeValue"]
        },
        totalPaymentDue: {
            domains: ["Invoice"],
            ranges: ["MonetaryAmount", "PriceSpecification"]
        },
        totalPrice: {
            domains: ["Reservation", "Ticket"],
            ranges: ["Text", "PriceSpecification", "Number"]
        },
        totalTime: {
            domains: ["HowToDirection", "HowTo"],
            ranges: ["Duration"]
        },
        touristType: {
            domains: ["TouristAttraction"],
            ranges: ["Audience", "Text"]
        },
        track: {
            domains: ["MusicPlaylist", "MusicGroup"],
            ranges: ["MusicRecording", "ItemList"]
        },
        trackingNumber: {
            domains: ["ParcelDelivery"],
            ranges: ["Text"]
        },
        trackingUrl: {
            domains: ["ParcelDelivery"],
            ranges: ["URL"]
        },
        trailer: {
            domains: ["VideoGame", "Episode", "RadioSeries", "Movie", "VideoGameSeries", "MovieSeries", "TVSeries"],
            ranges: ["VideoObject"]
        },
        trailerWeight: {
            domains: ["Vehicle"],
            ranges: ["QuantitativeValue"]
        },
        trainName: {
            domains: ["TrainTrip"],
            ranges: ["Text"]
        },
        trainNumber: {
            domains: ["TrainTrip"],
            ranges: ["Text"]
        },
        transFatContent: {
            domains: ["NutritionInformation"],
            ranges: ["Mass"]
        },
        transcript: {
            domains: ["AudioObject", "VideoObject"],
            ranges: ["Text"]
        },
        translationOfWork: {
            domains: ["CreativeWork"],
            ranges: ["CreativeWork"]
        },
        translator: {
            domains: ["CreativeWork", "Event"],
            ranges: ["Organization", "Person"]
        },
        typeOfBed: {
            domains: ["BedDetails"],
            ranges: ["BedType", "Text"]
        },
        typeOfGood: {
            domains: ["OwnershipInfo", "TypeAndQuantityNode"],
            ranges: ["Product", "Service"]
        },
        typicalAgeRange: {
            domains: ["CreativeWork", "Event"],
            ranges: ["Text"]
        },
        underName: {
            domains: ["Reservation", "Ticket"],
            ranges: ["Organization", "Person"]
        },
        unitCode: {
            domains: ["TypeAndQuantityNode", "QuantitativeValue", "UnitPriceSpecification", "PropertyValue"],
            ranges: ["URL", "Text"]
        },
        unitText: {
            domains: ["TypeAndQuantityNode", "QuantitativeValue", "UnitPriceSpecification", "PropertyValue"],
            ranges: ["Text"]
        },
        unnamedSourcesPolicy: {
            domains: ["Organization"],
            ranges: ["CreativeWork", "URL"]
        },
        unsaturatedFatContent: {
            domains: ["NutritionInformation"],
            ranges: ["Mass"]
        },
        uploadDate: {
            domains: ["MediaObject"],
            ranges: ["Date"]
        },
        upvoteCount: {
            domains: ["Comment", "Question"],
            ranges: ["Integer"]
        },
        url: {
            domains: ["Thing"],
            ranges: ["URL"]
        },
        urlTemplate: {
            domains: ["EntryPoint"],
            ranges: ["Text"]
        },
        validFor: {
            domains: ["Permit"],
            ranges: ["Duration"]
        },
        validFrom: {
            domains: ["LocationFeatureSpecification", "OpeningHoursSpecification", "Offer", "Demand", "PriceSpecification", "Permit"],
            ranges: ["DateTime"]
        },
        validIn: {
            domains: ["Permit"],
            ranges: ["AdministrativeArea"]
        },
        validThrough: {
            domains: ["LocationFeatureSpecification", "OpeningHoursSpecification", "Offer", "PriceSpecification", "JobPosting", "Demand"],
            ranges: ["DateTime"]
        },
        validUntil: {
            domains: ["Permit"],
            ranges: ["Date"]
        },
        value: {
            domains: ["QuantitativeValue", "PropertyValue"],
            ranges: ["Text", "Boolean", "Number", "StructuredValue"]
        },
        valueAddedTaxIncluded: {
            domains: ["PriceSpecification"],
            ranges: ["Boolean"]
        },
        valueMaxLength: {
            domains: ["PropertyValueSpecification"],
            ranges: ["Number"]
        },
        valueMinLength: {
            domains: ["PropertyValueSpecification"],
            ranges: ["Number"]
        },
        valueName: {
            domains: ["PropertyValueSpecification"],
            ranges: ["Text"]
        },
        valuePattern: {
            domains: ["PropertyValueSpecification"],
            ranges: ["Text"]
        },
        valueReference: {
            domains: ["QualitativeValue", "QuantitativeValue", "PropertyValue"],
            ranges: ["QualitativeValue", "PropertyValue", "QuantitativeValue", "Enumeration", "StructuredValue"]
        },
        valueRequired: {
            domains: ["PropertyValueSpecification"],
            ranges: ["Boolean"]
        },
        variableMeasured: {
            domains: ["Dataset"],
            ranges: ["PropertyValue", "Text"]
        },
        vatID: {
            domains: ["Person", "Organization"],
            ranges: ["Text"]
        },
        vehicleConfiguration: {
            domains: ["Vehicle"],
            ranges: ["Text"]
        },
        vehicleEngine: {
            domains: ["Vehicle"],
            ranges: ["EngineSpecification"]
        },
        vehicleIdentificationNumber: {
            domains: ["Vehicle"],
            ranges: ["Text"]
        },
        vehicleInteriorColor: {
            domains: ["Vehicle"],
            ranges: ["Text"]
        },
        vehicleInteriorType: {
            domains: ["Vehicle"],
            ranges: ["Text"]
        },
        vehicleModelDate: {
            domains: ["Vehicle"],
            ranges: ["Date"]
        },
        vehicleSeatingCapacity: {
            domains: ["Vehicle"],
            ranges: ["Number", "QuantitativeValue"]
        },
        vehicleSpecialUsage: {
            domains: ["Vehicle"],
            ranges: ["CarUsageType", "Text"]
        },
        vehicleTransmission: {
            domains: ["Vehicle"],
            ranges: ["QualitativeValue", "Text", "URL"]
        },
        version: {
            domains: ["CreativeWork"],
            ranges: ["Number", "Text"]
        },
        video: {
            domains: ["CreativeWork"],
            ranges: ["VideoObject"]
        },
        videoFormat: {
            domains: ["ScreeningEvent", "BroadcastService", "BroadcastEvent"],
            ranges: ["Text"]
        },
        videoFrameSize: {
            domains: ["VideoObject"],
            ranges: ["Text"]
        },
        videoQuality: {
            domains: ["VideoObject"],
            ranges: ["Text"]
        },
        volumeNumber: {
            domains: ["PublicationVolume"],
            ranges: ["Integer", "Text"]
        },
        warranty: {
            domains: ["Offer", "Demand"],
            ranges: ["WarrantyPromise"]
        },
        warrantyScope: {
            domains: ["WarrantyPromise"],
            ranges: ["WarrantyScope"]
        },
        webCheckinTime: {
            domains: ["Flight"],
            ranges: ["DateTime"]
        },
        weight: {
            domains: ["Person", "Product"],
            ranges: ["QuantitativeValue"]
        },
        weightTotal: {
            domains: ["Vehicle"],
            ranges: ["QuantitativeValue"]
        },
        wheelbase: {
            domains: ["Vehicle"],
            ranges: ["QuantitativeValue"]
        },
        width: {
            domains: ["VisualArtwork", "MediaObject", "Product"],
            ranges: ["Distance", "QuantitativeValue"]
        },
        winner: {
            domains: ["LoseAction"],
            ranges: ["Person"]
        },
        wordCount: {
            domains: ["Article"],
            ranges: ["Integer"]
        },
        workExample: {
            domains: ["CreativeWork"],
            ranges: ["CreativeWork"]
        },
        workFeatured: {
            domains: ["Event"],
            ranges: ["CreativeWork"]
        },
        workHours: {
            domains: ["JobPosting"],
            ranges: ["Text"]
        },
        workLocation: {
            domains: ["Person"],
            ranges: ["ContactPoint", "Place"]
        },
        workPerformed: {
            domains: ["Event"],
            ranges: ["CreativeWork"]
        },
        workPresented: {
            domains: ["ScreeningEvent"],
            ranges: ["Movie"]
        },
        workTranslation: {
            domains: ["CreativeWork"],
            ranges: ["CreativeWork"]
        },
        worksFor: {
            domains: ["Person"],
            ranges: ["Organization"]
        },
        worstRating: {
            domains: ["Rating"],
            ranges: ["Number", "Text"]
        },
        xpath: {
            domains: ["WebPageElement"],
            ranges: ["XPathType"]
        },
        yearlyRevenue: {
            domains: ["BusinessAudience"],
            ranges: ["QuantitativeValue"]
        },
        yearsInOperation: {
            domains: ["BusinessAudience"],
            ranges: ["QuantitativeValue"]
        },
        yield: {
            domains: ["HowTo"],
            ranges: ["QuantitativeValue", "Text"]
        }
    },
    types: {
        APIReference: {
            properties: ["assemblyVersion", "executableLibraryName", "programmingModel", "targetPlatform", "dependencies", "proficiencyLevel", "articleBody", "articleSection", "pageEnd", "pageStart", "pagination", "speakable", "wordCount", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["assemblyVersion", "executableLibraryName", "programmingModel", "targetPlatform"]
        },
        AboutPage: {
            properties: ["breadcrumb", "lastReviewed", "mainContentOfPage", "primaryImageOfPage", "relatedLink", "reviewedBy", "significantLink", "speakable", "specialty", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        AcceptAction: {
            properties: ["purpose", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Accommodation: {
            properties: ["amenityFeature", "floorSize", "numberOfRooms", "permittedUsage", "petsAllowed", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["amenityFeature", "floorSize", "numberOfRooms", "permittedUsage", "petsAllowed"]
        },
        AccountingService: {
            properties: ["feesAndCommissionsSpecification", "currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        AchieveAction: {
            properties: ["actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Action: {
            properties: ["actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target"]
        },
        ActionStatusType: {
            properties: ["supersededBy", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        ActivateAction: {
            properties: ["actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        AddAction: {
            properties: ["targetCollection", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        AdministrativeArea: {
            properties: ["additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        AdultEntertainment: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        AggregateOffer: {
            properties: ["highPrice", "lowPrice", "offerCount", "offers", "acceptedPaymentMethod", "addOn", "advanceBookingRequirement", "aggregateRating", "areaServed", "availability", "availabilityEnds", "availabilityStarts", "availableAtOrFrom", "availableDeliveryMethod", "businessFunction", "category", "deliveryLeadTime", "eligibleCustomerType", "eligibleDuration", "eligibleQuantity", "eligibleRegion", "eligibleTransactionVolume", "gtin12", "gtin13", "gtin14", "gtin8", "includesObject", "ineligibleRegion", "inventoryLevel", "itemCondition", "itemOffered", "mpn", "offeredBy", "price", "priceCurrency", "priceSpecification", "priceValidUntil", "review", "seller", "serialNumber", "sku", "validFrom", "validThrough", "warranty", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["highPrice", "lowPrice", "offerCount", "offers"]
        },
        AggregateRating: {
            properties: ["itemReviewed", "ratingCount", "reviewCount", "author", "bestRating", "ratingValue", "reviewAspect", "worstRating", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["itemReviewed", "ratingCount", "reviewCount"]
        },
        AgreeAction: {
            properties: ["actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Airline: {
            properties: ["boardingPolicy", "iataCode", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["boardingPolicy", "iataCode"]
        },
        Airport: {
            properties: ["iataCode", "icaoCode", "openingHours", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["iataCode", "icaoCode"]
        },
        AlignmentObject: {
            properties: ["alignmentType", "educationalFramework", "targetDescription", "targetName", "targetUrl", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["alignmentType", "educationalFramework", "targetDescription", "targetName", "targetUrl"]
        },
        AllocateAction: {
            properties: ["purpose", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["purpose"]
        },
        AmusementPark: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        AnimalShelter: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Answer: {
            properties: ["downvoteCount", "parentItem", "upvoteCount", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Apartment: {
            properties: ["numberOfRooms", "occupancy", "amenityFeature", "floorSize", "numberOfRooms", "permittedUsage", "petsAllowed", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["numberOfRooms", "occupancy"]
        },
        ApartmentComplex: {
            properties: ["additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        AppendAction: {
            properties: ["toLocation", "targetCollection", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        ApplyAction: {
            properties: ["actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Aquarium: {
            properties: ["openingHours", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        ArriveAction: {
            properties: ["fromLocation", "toLocation", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        ArtGallery: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Article: {
            properties: ["articleBody", "articleSection", "pageEnd", "pageStart", "pagination", "speakable", "wordCount", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["articleBody", "articleSection", "pageEnd", "pageStart", "pagination", "speakable", "wordCount"]
        },
        AskAction: {
            properties: ["question", "about", "inLanguage", "recipient", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["question"]
        },
        AssessAction: {
            properties: ["actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        AssignAction: {
            properties: ["purpose", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Attorney: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Audience: {
            properties: ["audienceType", "geographicArea", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["audienceType", "geographicArea"]
        },
        AudioObject: {
            properties: ["transcript", "associatedArticle", "bitrate", "contentSize", "contentUrl", "duration", "embedUrl", "encodesCreativeWork", "encodingFormat", "height", "playerType", "productionCompany", "regionsAllowed", "requiresSubscription", "uploadDate", "width", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["transcript"]
        },
        AuthorizeAction: {
            properties: ["recipient", "purpose", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["recipient"]
        },
        AutoBodyShop: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        AutoDealer: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        AutoPartsStore: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        AutoRental: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        AutoRepair: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        AutoWash: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        AutomatedTeller: {
            properties: ["feesAndCommissionsSpecification", "currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        AutomotiveBusiness: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Bakery: {
            properties: ["acceptsReservations", "hasMenu", "servesCuisine", "starRating", "currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        BankAccount: {
            properties: ["accountMinimumInflow", "accountOverdraftLimit", "bankAccountType", "annualPercentageRate", "feesAndCommissionsSpecification", "interestRate", "aggregateRating", "areaServed", "audience", "availableChannel", "award", "brand", "broker", "category", "hasOfferCatalog", "hoursAvailable", "isRelatedTo", "isSimilarTo", "logo", "offers", "provider", "providerMobility", "review", "serviceOutput", "serviceType", "termsOfService", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["accountMinimumInflow", "accountOverdraftLimit", "bankAccountType"]
        },
        BankOrCreditUnion: {
            properties: ["feesAndCommissionsSpecification", "currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        BarOrPub: {
            properties: ["acceptsReservations", "hasMenu", "servesCuisine", "starRating", "currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Barcode: {
            properties: ["caption", "exifData", "representativeOfPage", "thumbnail", "associatedArticle", "bitrate", "contentSize", "contentUrl", "duration", "embedUrl", "encodesCreativeWork", "encodingFormat", "height", "playerType", "productionCompany", "regionsAllowed", "requiresSubscription", "uploadDate", "width", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Beach: {
            properties: ["openingHours", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        BeautySalon: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        BedAndBreakfast: {
            properties: ["amenityFeature", "audience", "availableLanguage", "checkinTime", "checkoutTime", "petsAllowed", "starRating", "currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        BedDetails: {
            properties: ["numberOfBeds", "typeOfBed", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["numberOfBeds", "typeOfBed"]
        },
        BefriendAction: {
            properties: ["actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        BikeStore: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Blog: {
            properties: ["blogPost", "issn", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["blogPost", "issn"]
        },
        BlogPosting: {
            properties: ["sharedContent", "articleBody", "articleSection", "pageEnd", "pageStart", "pagination", "speakable", "wordCount", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        BoardingPolicyType: {
            properties: ["supersededBy", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        BodyOfWater: {
            properties: ["additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Book: {
            properties: ["abridged", "bookEdition", "bookFormat", "illustrator", "isbn", "numberOfPages", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["abridged", "bookEdition", "bookFormat", "illustrator", "isbn", "numberOfPages"]
        },
        BookFormatType: {
            properties: ["supersededBy", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        BookSeries: {
            properties: ["endDate", "issn", "startDate", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        BookStore: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        BookmarkAction: {
            properties: ["actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        BorrowAction: {
            properties: ["lender", "fromLocation", "toLocation", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["lender"]
        },
        BowlingAlley: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Brand: {
            properties: ["aggregateRating", "logo", "review", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["aggregateRating", "logo", "review"]
        },
        BreadcrumbList: {
            properties: ["itemListElement", "itemListOrder", "numberOfItems", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Brewery: {
            properties: ["acceptsReservations", "hasMenu", "servesCuisine", "starRating", "currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Bridge: {
            properties: ["openingHours", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        BroadcastChannel: {
            properties: ["broadcastChannelId", "broadcastFrequency", "broadcastServiceTier", "genre", "inBroadcastLineup", "providesBroadcastService", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["broadcastChannelId", "broadcastFrequency", "broadcastServiceTier", "genre", "inBroadcastLineup", "providesBroadcastService"]
        },
        BroadcastEvent: {
            properties: ["broadcastOfEvent", "isLiveBroadcast", "videoFormat", "isAccessibleForFree", "publishedBy", "publishedOn", "about", "actor", "aggregateRating", "attendee", "audience", "composer", "contributor", "director", "doorTime", "duration", "endDate", "eventStatus", "funder", "inLanguage", "isAccessibleForFree", "location", "maximumAttendeeCapacity", "offers", "organizer", "performer", "previousStartDate", "recordedIn", "remainingAttendeeCapacity", "review", "sponsor", "startDate", "subEvent", "superEvent", "translator", "typicalAgeRange", "workFeatured", "workPerformed", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["broadcastOfEvent", "isLiveBroadcast", "videoFormat"]
        },
        BroadcastService: {
            properties: ["broadcastAffiliateOf", "broadcastDisplayName", "broadcastFrequency", "broadcastTimezone", "broadcaster", "hasBroadcastChannel", "parentService", "videoFormat", "aggregateRating", "areaServed", "audience", "availableChannel", "award", "brand", "broker", "category", "hasOfferCatalog", "hoursAvailable", "isRelatedTo", "isSimilarTo", "logo", "offers", "provider", "providerMobility", "review", "serviceOutput", "serviceType", "termsOfService", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["broadcastAffiliateOf", "broadcastDisplayName", "broadcastFrequency", "broadcastTimezone", "broadcaster", "hasBroadcastChannel", "parentService", "videoFormat"]
        },
        BuddhistTemple: {
            properties: ["openingHours", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        BusReservation: {
            properties: ["bookingTime", "broker", "modifiedTime", "priceCurrency", "programMembershipUsed", "provider", "reservationFor", "reservationId", "reservationStatus", "reservedTicket", "totalPrice", "underName", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        BusStation: {
            properties: ["openingHours", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        BusStop: {
            properties: ["openingHours", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        BusTrip: {
            properties: ["arrivalBusStop", "arrivalTime", "busName", "busNumber", "departureBusStop", "departureTime", "provider", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["arrivalBusStop", "arrivalTime", "busName", "busNumber", "departureBusStop", "departureTime", "provider"]
        },
        BusinessAudience: {
            properties: ["numberOfEmployees", "yearlyRevenue", "yearsInOperation", "audienceType", "geographicArea", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["numberOfEmployees", "yearlyRevenue", "yearsInOperation"]
        },
        BusinessEntityType: {
            properties: ["supersededBy", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        BusinessEvent: {
            properties: ["about", "actor", "aggregateRating", "attendee", "audience", "composer", "contributor", "director", "doorTime", "duration", "endDate", "eventStatus", "funder", "inLanguage", "isAccessibleForFree", "location", "maximumAttendeeCapacity", "offers", "organizer", "performer", "previousStartDate", "recordedIn", "remainingAttendeeCapacity", "review", "sponsor", "startDate", "subEvent", "superEvent", "translator", "typicalAgeRange", "workFeatured", "workPerformed", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        BusinessFunction: {
            properties: ["supersededBy", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        BuyAction: {
            properties: ["seller", "price", "priceSpecification", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["seller"]
        },
        CableOrSatelliteService: {
            properties: ["aggregateRating", "areaServed", "audience", "availableChannel", "award", "brand", "broker", "category", "hasOfferCatalog", "hoursAvailable", "isRelatedTo", "isSimilarTo", "logo", "offers", "provider", "providerMobility", "review", "serviceOutput", "serviceType", "termsOfService", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        CafeOrCoffeeShop: {
            properties: ["acceptsReservations", "hasMenu", "servesCuisine", "starRating", "currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Campground: {
            properties: ["openingHours", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "amenityFeature", "audience", "availableLanguage", "checkinTime", "checkoutTime", "petsAllowed", "starRating", "currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        CampingPitch: {
            properties: ["amenityFeature", "floorSize", "numberOfRooms", "permittedUsage", "petsAllowed", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Canal: {
            properties: ["additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        CancelAction: {
            properties: ["scheduledTime", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Car: {
            properties: ["acrissCode", "roofLoad", "accelerationTime", "bodyType", "cargoVolume", "dateVehicleFirstRegistered", "driveWheelConfiguration", "emissionsCO2", "fuelCapacity", "fuelConsumption", "fuelEfficiency", "fuelType", "knownVehicleDamages", "meetsEmissionStandard", "mileageFromOdometer", "modelDate", "numberOfAirbags", "numberOfAxles", "numberOfDoors", "numberOfForwardGears", "numberOfPreviousOwners", "payload", "productionDate", "purchaseDate", "seatingCapacity", "speed", "steeringPosition", "tongueWeight", "trailerWeight", "vehicleConfiguration", "vehicleEngine", "vehicleIdentificationNumber", "vehicleInteriorColor", "vehicleInteriorType", "vehicleModelDate", "vehicleSeatingCapacity", "vehicleSpecialUsage", "vehicleTransmission", "weightTotal", "wheelbase", "additionalProperty", "aggregateRating", "audience", "award", "brand", "category", "color", "depth", "gtin12", "gtin13", "gtin14", "gtin8", "height", "isAccessoryOrSparePartFor", "isConsumableFor", "isRelatedTo", "isSimilarTo", "itemCondition", "logo", "manufacturer", "material", "model", "mpn", "offers", "productID", "productionDate", "purchaseDate", "releaseDate", "review", "sku", "weight", "width", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["acrissCode", "roofLoad"]
        },
        Casino: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        CatholicChurch: {
            properties: ["openingHours", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Cemetery: {
            properties: ["openingHours", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        CheckAction: {
            properties: ["actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        CheckInAction: {
            properties: ["about", "inLanguage", "recipient", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        CheckOutAction: {
            properties: ["about", "inLanguage", "recipient", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        CheckoutPage: {
            properties: ["breadcrumb", "lastReviewed", "mainContentOfPage", "primaryImageOfPage", "relatedLink", "reviewedBy", "significantLink", "speakable", "specialty", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        ChildCare: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        ChildrensEvent: {
            properties: ["about", "actor", "aggregateRating", "attendee", "audience", "composer", "contributor", "director", "doorTime", "duration", "endDate", "eventStatus", "funder", "inLanguage", "isAccessibleForFree", "location", "maximumAttendeeCapacity", "offers", "organizer", "performer", "previousStartDate", "recordedIn", "remainingAttendeeCapacity", "review", "sponsor", "startDate", "subEvent", "superEvent", "translator", "typicalAgeRange", "workFeatured", "workPerformed", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        ChooseAction: {
            properties: ["actionOption", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["actionOption"]
        },
        Church: {
            properties: ["openingHours", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        City: {
            properties: ["additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        CityHall: {
            properties: ["openingHours", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        CivicStructure: {
            properties: ["openingHours", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["openingHours"]
        },
        ClaimReview: {
            properties: ["claimReviewed", "itemReviewed", "reviewAspect", "reviewBody", "reviewRating", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["claimReviewed"]
        },
        Clip: {
            properties: ["actor", "clipNumber", "director", "musicBy", "partOfEpisode", "partOfSeason", "partOfSeries", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["actor", "clipNumber", "director", "musicBy", "partOfEpisode", "partOfSeason", "partOfSeries"]
        },
        ClothingStore: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        CollectionPage: {
            properties: ["breadcrumb", "lastReviewed", "mainContentOfPage", "primaryImageOfPage", "relatedLink", "reviewedBy", "significantLink", "speakable", "specialty", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        CollegeOrUniversity: {
            properties: ["alumni", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        ComedyClub: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        ComedyEvent: {
            properties: ["about", "actor", "aggregateRating", "attendee", "audience", "composer", "contributor", "director", "doorTime", "duration", "endDate", "eventStatus", "funder", "inLanguage", "isAccessibleForFree", "location", "maximumAttendeeCapacity", "offers", "organizer", "performer", "previousStartDate", "recordedIn", "remainingAttendeeCapacity", "review", "sponsor", "startDate", "subEvent", "superEvent", "translator", "typicalAgeRange", "workFeatured", "workPerformed", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Comment: {
            properties: ["downvoteCount", "parentItem", "upvoteCount", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["downvoteCount", "parentItem", "upvoteCount"]
        },
        CommentAction: {
            properties: ["resultComment", "about", "inLanguage", "recipient", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["resultComment"]
        },
        CommunicateAction: {
            properties: ["about", "inLanguage", "recipient", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["about", "inLanguage", "recipient"]
        },
        CompoundPriceSpecification: {
            properties: ["priceComponent", "eligibleQuantity", "eligibleTransactionVolume", "maxPrice", "minPrice", "price", "priceCurrency", "validFrom", "validThrough", "valueAddedTaxIncluded", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["priceComponent"]
        },
        ComputerLanguage: {
            properties: ["additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        ComputerStore: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        ConfirmAction: {
            properties: ["event", "about", "inLanguage", "recipient", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        ConsumeAction: {
            properties: ["expectsAcceptanceOf", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["expectsAcceptanceOf"]
        },
        ContactPage: {
            properties: ["breadcrumb", "lastReviewed", "mainContentOfPage", "primaryImageOfPage", "relatedLink", "reviewedBy", "significantLink", "speakable", "specialty", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        ContactPoint: {
            properties: ["areaServed", "availableLanguage", "contactOption", "contactType", "email", "faxNumber", "hoursAvailable", "productSupported", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["areaServed", "availableLanguage", "contactOption", "contactType", "email", "faxNumber", "hoursAvailable", "productSupported", "telephone"]
        },
        ContactPointOption: {
            properties: ["supersededBy", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Continent: {
            properties: ["additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        ControlAction: {
            properties: ["actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        ConvenienceStore: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Conversation: {
            properties: ["about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        CookAction: {
            properties: ["foodEstablishment", "foodEvent", "recipe", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["foodEstablishment", "foodEvent", "recipe"]
        },
        Corporation: {
            properties: ["tickerSymbol", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["tickerSymbol"]
        },
        Country: {
            properties: ["additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Course: {
            properties: ["courseCode", "coursePrerequisites", "educationalCredentialAwarded", "hasCourseInstance", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["courseCode", "coursePrerequisites", "educationalCredentialAwarded", "hasCourseInstance"]
        },
        CourseInstance: {
            properties: ["courseMode", "instructor", "about", "actor", "aggregateRating", "attendee", "audience", "composer", "contributor", "director", "doorTime", "duration", "endDate", "eventStatus", "funder", "inLanguage", "isAccessibleForFree", "location", "maximumAttendeeCapacity", "offers", "organizer", "performer", "previousStartDate", "recordedIn", "remainingAttendeeCapacity", "review", "sponsor", "startDate", "subEvent", "superEvent", "translator", "typicalAgeRange", "workFeatured", "workPerformed", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["courseMode", "instructor"]
        },
        Courthouse: {
            properties: ["openingHours", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        CreateAction: {
            properties: ["actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        CreativeWork: {
            properties: ["about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation"]
        },
        CreativeWorkSeason: {
            properties: [],
            specific_properties: []
        },
        CreativeWorkSeries: {
            properties: ["endDate", "issn", "startDate", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["endDate", "issn", "startDate"]
        },
        CreditCard: {
            properties: ["monthlyMinimumRepaymentAmount", "cashBack", "contactlessPayment", "floorLimit", "supersededBy", "annualPercentageRate", "feesAndCommissionsSpecification", "interestRate", "aggregateRating", "areaServed", "audience", "availableChannel", "award", "brand", "broker", "category", "hasOfferCatalog", "hoursAvailable", "isRelatedTo", "isSimilarTo", "logo", "offers", "provider", "providerMobility", "review", "serviceOutput", "serviceType", "termsOfService", "amount", "currency", "gracePeriod", "loanRepaymentForm", "loanTerm", "loanType", "recourseLoan", "renegotiableLoan", "requiredCollateral", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["monthlyMinimumRepaymentAmount"]
        },
        Crematorium: {
            properties: ["openingHours", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        CurrencyConversionService: {
            properties: ["annualPercentageRate", "feesAndCommissionsSpecification", "interestRate", "aggregateRating", "areaServed", "audience", "availableChannel", "award", "brand", "broker", "category", "hasOfferCatalog", "hoursAvailable", "isRelatedTo", "isSimilarTo", "logo", "offers", "provider", "providerMobility", "review", "serviceOutput", "serviceType", "termsOfService", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        DanceEvent: {
            properties: ["about", "actor", "aggregateRating", "attendee", "audience", "composer", "contributor", "director", "doorTime", "duration", "endDate", "eventStatus", "funder", "inLanguage", "isAccessibleForFree", "location", "maximumAttendeeCapacity", "offers", "organizer", "performer", "previousStartDate", "recordedIn", "remainingAttendeeCapacity", "review", "sponsor", "startDate", "subEvent", "superEvent", "translator", "typicalAgeRange", "workFeatured", "workPerformed", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        DanceGroup: {
            properties: ["actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        DataCatalog: {
            properties: ["dataset", "measurementTechnique", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["dataset", "measurementTechnique"]
        },
        DataDownload: {
            properties: ["measurementTechnique", "associatedArticle", "bitrate", "contentSize", "contentUrl", "duration", "embedUrl", "encodesCreativeWork", "encodingFormat", "height", "playerType", "productionCompany", "regionsAllowed", "requiresSubscription", "uploadDate", "width", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["measurementTechnique"]
        },
        DataFeed: {
            properties: ["dataFeedElement", "distribution", "includedInDataCatalog", "issn", "measurementTechnique", "variableMeasured", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["dataFeedElement"]
        },
        DataFeedItem: {
            properties: ["dateCreated", "dateDeleted", "dateModified", "item", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["dateCreated", "dateDeleted", "dateModified", "item"]
        },
        Dataset: {
            properties: ["distribution", "includedInDataCatalog", "issn", "measurementTechnique", "variableMeasured", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["distribution", "includedInDataCatalog", "issn", "measurementTechnique", "variableMeasured"]
        },
        DayOfWeek: {
            properties: ["supersededBy", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        DaySpa: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        DeactivateAction: {
            properties: ["actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        DefenceEstablishment: {
            properties: ["openingHours", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        DeleteAction: {
            properties: ["targetCollection", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        DeliveryChargeSpecification: {
            properties: ["appliesToDeliveryMethod", "areaServed", "eligibleRegion", "ineligibleRegion", "eligibleQuantity", "eligibleTransactionVolume", "maxPrice", "minPrice", "price", "priceCurrency", "validFrom", "validThrough", "valueAddedTaxIncluded", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["appliesToDeliveryMethod", "areaServed", "eligibleRegion", "ineligibleRegion"]
        },
        DeliveryEvent: {
            properties: ["accessCode", "availableFrom", "availableThrough", "hasDeliveryMethod", "about", "actor", "aggregateRating", "attendee", "audience", "composer", "contributor", "director", "doorTime", "duration", "endDate", "eventStatus", "funder", "inLanguage", "isAccessibleForFree", "location", "maximumAttendeeCapacity", "offers", "organizer", "performer", "previousStartDate", "recordedIn", "remainingAttendeeCapacity", "review", "sponsor", "startDate", "subEvent", "superEvent", "translator", "typicalAgeRange", "workFeatured", "workPerformed", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["accessCode", "availableFrom", "availableThrough", "hasDeliveryMethod"]
        },
        DeliveryMethod: {
            properties: ["supersededBy", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Demand: {
            properties: ["acceptedPaymentMethod", "advanceBookingRequirement", "areaServed", "availability", "availabilityEnds", "availabilityStarts", "availableAtOrFrom", "availableDeliveryMethod", "businessFunction", "deliveryLeadTime", "eligibleCustomerType", "eligibleDuration", "eligibleQuantity", "eligibleRegion", "eligibleTransactionVolume", "gtin12", "gtin13", "gtin14", "gtin8", "includesObject", "ineligibleRegion", "inventoryLevel", "itemCondition", "itemOffered", "mpn", "priceSpecification", "seller", "serialNumber", "sku", "validFrom", "validThrough", "warranty", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["acceptedPaymentMethod", "advanceBookingRequirement", "areaServed", "availability", "availabilityEnds", "availabilityStarts", "availableAtOrFrom", "availableDeliveryMethod", "businessFunction", "deliveryLeadTime", "eligibleCustomerType", "eligibleDuration", "eligibleQuantity", "eligibleRegion", "eligibleTransactionVolume", "gtin12", "gtin13", "gtin14", "gtin8", "includesObject", "ineligibleRegion", "inventoryLevel", "itemCondition", "itemOffered", "mpn", "priceSpecification", "seller", "serialNumber", "sku", "validFrom", "validThrough", "warranty"]
        },
        Dentist: {
            properties: ["healthPlanNetworkId", "isAcceptingNewPatients", "medicalSpecialty", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        DepartAction: {
            properties: ["fromLocation", "toLocation", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        DepartmentStore: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        DepositAccount: {
            properties: ["accountMinimumInflow", "accountOverdraftLimit", "bankAccountType", "annualPercentageRate", "feesAndCommissionsSpecification", "interestRate", "aggregateRating", "areaServed", "audience", "availableChannel", "award", "brand", "broker", "category", "hasOfferCatalog", "hoursAvailable", "isRelatedTo", "isSimilarTo", "logo", "offers", "provider", "providerMobility", "review", "serviceOutput", "serviceType", "termsOfService", "amount", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        DigitalDocument: {
            properties: ["hasDigitalDocumentPermission", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["hasDigitalDocumentPermission"]
        },
        DigitalDocumentPermission: {
            properties: ["grantee", "permissionType", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["grantee", "permissionType"]
        },
        DigitalDocumentPermissionType: {
            properties: ["supersededBy", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        DisagreeAction: {
            properties: ["actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        DiscoverAction: {
            properties: ["actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        DiscussionForumPosting: {
            properties: ["sharedContent", "articleBody", "articleSection", "pageEnd", "pageStart", "pagination", "speakable", "wordCount", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        DislikeAction: {
            properties: ["actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Distance: {
            properties: ["additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        DonateAction: {
            properties: ["recipient", "price", "priceSpecification", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["recipient"]
        },
        DownloadAction: {
            properties: ["fromLocation", "toLocation", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        DrawAction: {
            properties: ["actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        DrinkAction: {
            properties: ["expectsAcceptanceOf", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        DriveWheelConfigurationValue: {
            properties: ["additionalProperty", "equal", "greater", "greaterOrEqual", "lesser", "lesserOrEqual", "nonEqual", "valueReference", "supersededBy", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        DryCleaningOrLaundry: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Duration: {
            properties: ["additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        EatAction: {
            properties: ["expectsAcceptanceOf", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        EducationEvent: {
            properties: ["about", "actor", "aggregateRating", "attendee", "audience", "composer", "contributor", "director", "doorTime", "duration", "endDate", "eventStatus", "funder", "inLanguage", "isAccessibleForFree", "location", "maximumAttendeeCapacity", "offers", "organizer", "performer", "previousStartDate", "recordedIn", "remainingAttendeeCapacity", "review", "sponsor", "startDate", "subEvent", "superEvent", "translator", "typicalAgeRange", "workFeatured", "workPerformed", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        EducationalAudience: {
            properties: ["educationalRole", "audienceType", "geographicArea", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["educationalRole"]
        },
        EducationalOrganization: {
            properties: ["alumni", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["alumni"]
        },
        Electrician: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        ElectronicsStore: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        ElementarySchool: {
            properties: ["alumni", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        EmailMessage: {
            properties: ["bccRecipient", "ccRecipient", "dateRead", "dateReceived", "dateSent", "messageAttachment", "recipient", "sender", "toRecipient", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Embassy: {
            properties: ["openingHours", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        EmergencyService: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        EmployeeRole: {
            properties: ["baseSalary", "salaryCurrency", "numberedPosition", "endDate", "roleName", "startDate", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["baseSalary", "salaryCurrency"]
        },
        EmploymentAgency: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        EndorseAction: {
            properties: ["endorsee", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["endorsee"]
        },
        Energy: {
            properties: ["additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        EngineSpecification: {
            properties: ["engineDisplacement", "enginePower", "engineType", "fuelType", "torque", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["engineDisplacement", "enginePower", "engineType", "fuelType", "torque"]
        },
        EntertainmentBusiness: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        EntryPoint: {
            properties: ["actionApplication", "actionPlatform", "contentType", "encodingType", "httpMethod", "urlTemplate", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["actionApplication", "actionPlatform", "contentType", "encodingType", "httpMethod", "urlTemplate"]
        },
        Enumeration: {
            properties: ["supersededBy", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["supersededBy"]
        },
        Episode: {
            properties: ["actor", "director", "episodeNumber", "musicBy", "partOfSeason", "partOfSeries", "productionCompany", "trailer", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["actor", "director", "episodeNumber", "musicBy", "partOfSeason", "partOfSeries", "productionCompany", "trailer"]
        },
        Event: {
            properties: ["about", "actor", "aggregateRating", "attendee", "audience", "composer", "contributor", "director", "doorTime", "duration", "endDate", "eventStatus", "funder", "inLanguage", "isAccessibleForFree", "location", "maximumAttendeeCapacity", "offers", "organizer", "performer", "previousStartDate", "recordedIn", "remainingAttendeeCapacity", "review", "sponsor", "startDate", "subEvent", "superEvent", "translator", "typicalAgeRange", "workFeatured", "workPerformed", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["about", "actor", "aggregateRating", "attendee", "audience", "composer", "contributor", "director", "doorTime", "duration", "endDate", "eventStatus", "funder", "inLanguage", "isAccessibleForFree", "location", "maximumAttendeeCapacity", "offers", "organizer", "performer", "previousStartDate", "recordedIn", "remainingAttendeeCapacity", "review", "sponsor", "startDate", "subEvent", "superEvent", "translator", "typicalAgeRange", "workFeatured", "workPerformed"]
        },
        EventReservation: {
            properties: ["bookingTime", "broker", "modifiedTime", "priceCurrency", "programMembershipUsed", "provider", "reservationFor", "reservationId", "reservationStatus", "reservedTicket", "totalPrice", "underName", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        EventStatusType: {
            properties: ["supersededBy", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        EventVenue: {
            properties: ["openingHours", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        ExerciseAction: {
            properties: ["diet", "distance", "exerciseCourse", "exercisePlan", "exerciseRelatedDiet", "exerciseType", "fromLocation", "opponent", "sportsActivityLocation", "sportsEvent", "sportsTeam", "toLocation", "audience", "event", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["diet", "distance", "exerciseCourse", "exercisePlan", "exerciseRelatedDiet", "exerciseType", "fromLocation", "opponent", "sportsActivityLocation", "sportsEvent", "sportsTeam", "toLocation"]
        },
        ExerciseGym: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        ExhibitionEvent: {
            properties: ["about", "actor", "aggregateRating", "attendee", "audience", "composer", "contributor", "director", "doorTime", "duration", "endDate", "eventStatus", "funder", "inLanguage", "isAccessibleForFree", "location", "maximumAttendeeCapacity", "offers", "organizer", "performer", "previousStartDate", "recordedIn", "remainingAttendeeCapacity", "review", "sponsor", "startDate", "subEvent", "superEvent", "translator", "typicalAgeRange", "workFeatured", "workPerformed", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        False: {
            properties: [],
            specific_properties: []
        },
        FastFoodRestaurant: {
            properties: ["acceptsReservations", "hasMenu", "servesCuisine", "starRating", "currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Festival: {
            properties: ["about", "actor", "aggregateRating", "attendee", "audience", "composer", "contributor", "director", "doorTime", "duration", "endDate", "eventStatus", "funder", "inLanguage", "isAccessibleForFree", "location", "maximumAttendeeCapacity", "offers", "organizer", "performer", "previousStartDate", "recordedIn", "remainingAttendeeCapacity", "review", "sponsor", "startDate", "subEvent", "superEvent", "translator", "typicalAgeRange", "workFeatured", "workPerformed", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        FilmAction: {
            properties: ["actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        FinancialProduct: {
            properties: ["annualPercentageRate", "feesAndCommissionsSpecification", "interestRate", "aggregateRating", "areaServed", "audience", "availableChannel", "award", "brand", "broker", "category", "hasOfferCatalog", "hoursAvailable", "isRelatedTo", "isSimilarTo", "logo", "offers", "provider", "providerMobility", "review", "serviceOutput", "serviceType", "termsOfService", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["annualPercentageRate", "feesAndCommissionsSpecification", "interestRate"]
        },
        FinancialService: {
            properties: ["feesAndCommissionsSpecification", "currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["feesAndCommissionsSpecification"]
        },
        FindAction: {
            properties: ["actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        FireStation: {
            properties: ["openingHours", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Flight: {
            properties: ["aircraft", "arrivalAirport", "arrivalGate", "arrivalTerminal", "arrivalTime", "boardingPolicy", "departureAirport", "departureGate", "departureTerminal", "departureTime", "estimatedFlightDuration", "flightDistance", "flightNumber", "mealService", "provider", "seller", "webCheckinTime", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["aircraft", "arrivalAirport", "arrivalGate", "arrivalTerminal", "arrivalTime", "boardingPolicy", "departureAirport", "departureGate", "departureTerminal", "departureTime", "estimatedFlightDuration", "flightDistance", "flightNumber", "mealService", "provider", "seller", "webCheckinTime"]
        },
        FlightReservation: {
            properties: ["boardingGroup", "passengerPriorityStatus", "passengerSequenceNumber", "securityScreening", "bookingTime", "broker", "modifiedTime", "priceCurrency", "programMembershipUsed", "provider", "reservationFor", "reservationId", "reservationStatus", "reservedTicket", "totalPrice", "underName", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["boardingGroup", "passengerPriorityStatus", "passengerSequenceNumber", "securityScreening"]
        },
        Florist: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        FollowAction: {
            properties: ["followee", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["followee"]
        },
        FoodEstablishment: {
            properties: ["acceptsReservations", "hasMenu", "servesCuisine", "starRating", "currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["acceptsReservations", "hasMenu", "servesCuisine", "starRating"]
        },
        FoodEstablishmentReservation: {
            properties: ["endTime", "partySize", "startTime", "bookingTime", "broker", "modifiedTime", "priceCurrency", "programMembershipUsed", "provider", "reservationFor", "reservationId", "reservationStatus", "reservedTicket", "totalPrice", "underName", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["endTime", "partySize", "startTime"]
        },
        FoodEvent: {
            properties: ["about", "actor", "aggregateRating", "attendee", "audience", "composer", "contributor", "director", "doorTime", "duration", "endDate", "eventStatus", "funder", "inLanguage", "isAccessibleForFree", "location", "maximumAttendeeCapacity", "offers", "organizer", "performer", "previousStartDate", "recordedIn", "remainingAttendeeCapacity", "review", "sponsor", "startDate", "subEvent", "superEvent", "translator", "typicalAgeRange", "workFeatured", "workPerformed", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        FoodService: {
            properties: ["aggregateRating", "areaServed", "audience", "availableChannel", "award", "brand", "broker", "category", "hasOfferCatalog", "hoursAvailable", "isRelatedTo", "isSimilarTo", "logo", "offers", "provider", "providerMobility", "review", "serviceOutput", "serviceType", "termsOfService", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        FurnitureStore: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Game: {
            properties: ["characterAttribute", "gameItem", "gameLocation", "numberOfPlayers", "quest", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["characterAttribute", "gameItem", "gameLocation", "numberOfPlayers", "quest"]
        },
        GamePlayMode: {
            properties: ["supersededBy", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        GameServer: {
            properties: ["game", "playersOnline", "serverStatus", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["game", "playersOnline", "serverStatus"]
        },
        GameServerStatus: {
            properties: ["supersededBy", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        GardenStore: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        GasStation: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        GatedResidenceCommunity: {
            properties: ["additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        GenderType: {
            properties: ["supersededBy", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        GeneralContractor: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        GeoCircle: {
            properties: ["geoMidpoint", "geoRadius", "address", "addressCountry", "box", "circle", "elevation", "line", "polygon", "postalCode", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["geoMidpoint", "geoRadius"]
        },
        GeoCoordinates: {
            properties: ["address", "addressCountry", "elevation", "latitude", "longitude", "postalCode", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["address", "addressCountry", "elevation", "latitude", "longitude", "postalCode"]
        },
        GeoShape: {
            properties: ["address", "addressCountry", "box", "circle", "elevation", "line", "polygon", "postalCode", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["address", "addressCountry", "box", "circle", "elevation", "line", "polygon", "postalCode"]
        },
        GiveAction: {
            properties: ["recipient", "fromLocation", "toLocation", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["recipient"]
        },
        GolfCourse: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        GovernmentBuilding: {
            properties: ["openingHours", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        GovernmentOffice: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        GovernmentOrganization: {
            properties: ["actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        GovernmentPermit: {
            properties: ["issuedBy", "issuedThrough", "permitAudience", "validFor", "validFrom", "validIn", "validUntil", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        GovernmentService: {
            properties: ["serviceOperator", "aggregateRating", "areaServed", "audience", "availableChannel", "award", "brand", "broker", "category", "hasOfferCatalog", "hoursAvailable", "isRelatedTo", "isSimilarTo", "logo", "offers", "provider", "providerMobility", "review", "serviceOutput", "serviceType", "termsOfService", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["serviceOperator"]
        },
        GroceryStore: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        HVACBusiness: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        HairSalon: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        HardwareStore: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        HealthAndBeautyBusiness: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        HealthClub: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        HighSchool: {
            properties: ["alumni", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        HinduTemple: {
            properties: ["openingHours", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        HobbyShop: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        HomeAndConstructionBusiness: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        HomeGoodsStore: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Hospital: {
            properties: ["availableService", "medicalSpecialty", "healthPlanNetworkId", "isAcceptingNewPatients", "medicalSpecialty", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "openingHours", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["availableService", "medicalSpecialty"]
        },
        Hostel: {
            properties: ["amenityFeature", "audience", "availableLanguage", "checkinTime", "checkoutTime", "petsAllowed", "starRating", "currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Hotel: {
            properties: ["amenityFeature", "audience", "availableLanguage", "checkinTime", "checkoutTime", "petsAllowed", "starRating", "currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        HotelRoom: {
            properties: ["bed", "occupancy", "amenityFeature", "floorSize", "numberOfRooms", "permittedUsage", "petsAllowed", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["bed", "occupancy"]
        },
        House: {
            properties: ["numberOfRooms", "amenityFeature", "floorSize", "numberOfRooms", "permittedUsage", "petsAllowed", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["numberOfRooms"]
        },
        HousePainter: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        HowTo: {
            properties: ["estimatedCost", "performTime", "prepTime", "step", "supply", "tool", "totalTime", "yield", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["estimatedCost", "performTime", "prepTime", "step", "supply", "tool", "totalTime", "yield"]
        },
        HowToDirection: {
            properties: ["afterMedia", "beforeMedia", "duringMedia", "performTime", "prepTime", "supply", "tool", "totalTime", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "item", "nextItem", "position", "previousItem", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["afterMedia", "beforeMedia", "duringMedia", "performTime", "prepTime", "supply", "tool", "totalTime"]
        },
        HowToItem: {
            properties: ["requiredQuantity", "item", "nextItem", "position", "previousItem", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["requiredQuantity"]
        },
        HowToSection: {
            properties: ["about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "itemListElement", "itemListOrder", "numberOfItems", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        HowToStep: {
            properties: ["about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "itemListElement", "itemListOrder", "numberOfItems", "item", "nextItem", "position", "previousItem", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        HowToSupply: {
            properties: ["estimatedCost", "requiredQuantity", "item", "nextItem", "position", "previousItem", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["estimatedCost"]
        },
        HowToTip: {
            properties: ["item", "nextItem", "position", "previousItem", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        HowToTool: {
            properties: ["requiredQuantity", "item", "nextItem", "position", "previousItem", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        IceCreamShop: {
            properties: ["acceptsReservations", "hasMenu", "servesCuisine", "starRating", "currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        IgnoreAction: {
            properties: ["actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        ImageGallery: {
            properties: ["breadcrumb", "lastReviewed", "mainContentOfPage", "primaryImageOfPage", "relatedLink", "reviewedBy", "significantLink", "speakable", "specialty", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        ImageObject: {
            properties: ["caption", "exifData", "representativeOfPage", "thumbnail", "associatedArticle", "bitrate", "contentSize", "contentUrl", "duration", "embedUrl", "encodesCreativeWork", "encodingFormat", "height", "playerType", "productionCompany", "regionsAllowed", "requiresSubscription", "uploadDate", "width", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["caption", "exifData", "representativeOfPage", "thumbnail"]
        },
        IndividualProduct: {
            properties: ["serialNumber", "additionalProperty", "aggregateRating", "audience", "award", "brand", "category", "color", "depth", "gtin12", "gtin13", "gtin14", "gtin8", "height", "isAccessoryOrSparePartFor", "isConsumableFor", "isRelatedTo", "isSimilarTo", "itemCondition", "logo", "manufacturer", "material", "model", "mpn", "offers", "productID", "productionDate", "purchaseDate", "releaseDate", "review", "sku", "weight", "width", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["serialNumber"]
        },
        InformAction: {
            properties: ["event", "about", "inLanguage", "recipient", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["event"]
        },
        InsertAction: {
            properties: ["toLocation", "targetCollection", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["toLocation"]
        },
        InstallAction: {
            properties: ["expectsAcceptanceOf", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        InsuranceAgency: {
            properties: ["feesAndCommissionsSpecification", "currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Intangible: {
            properties: ["additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        InteractAction: {
            properties: ["actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        InteractionCounter: {
            properties: [],
            specific_properties: []
        },
        InternetCafe: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        InvestmentOrDeposit: {
            properties: ["amount", "annualPercentageRate", "feesAndCommissionsSpecification", "interestRate", "aggregateRating", "areaServed", "audience", "availableChannel", "award", "brand", "broker", "category", "hasOfferCatalog", "hoursAvailable", "isRelatedTo", "isSimilarTo", "logo", "offers", "provider", "providerMobility", "review", "serviceOutput", "serviceType", "termsOfService", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["amount"]
        },
        InviteAction: {
            properties: ["event", "about", "inLanguage", "recipient", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["event"]
        },
        Invoice: {
            properties: ["accountId", "billingPeriod", "broker", "category", "confirmationNumber", "customer", "minimumPaymentDue", "paymentDueDate", "paymentMethod", "paymentMethodId", "paymentStatus", "provider", "referencesOrder", "scheduledPaymentDate", "totalPaymentDue", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["accountId", "billingPeriod", "broker", "category", "confirmationNumber", "customer", "minimumPaymentDue", "paymentDueDate", "paymentMethod", "paymentMethodId", "paymentStatus", "provider", "referencesOrder", "scheduledPaymentDate", "totalPaymentDue"]
        },
        ItemAvailability: {
            properties: ["supersededBy", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        ItemList: {
            properties: ["itemListElement", "itemListOrder", "numberOfItems", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["itemListElement", "itemListOrder", "numberOfItems"]
        },
        ItemListOrderType: {
            properties: ["supersededBy", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        ItemPage: {
            properties: ["breadcrumb", "lastReviewed", "mainContentOfPage", "primaryImageOfPage", "relatedLink", "reviewedBy", "significantLink", "speakable", "specialty", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        JewelryStore: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        JobPosting: {
            properties: ["baseSalary", "datePosted", "educationRequirements", "employmentType", "estimatedSalary", "experienceRequirements", "hiringOrganization", "incentiveCompensation", "industry", "jobBenefits", "jobLocation", "occupationalCategory", "qualifications", "relevantOccupation", "responsibilities", "salaryCurrency", "skills", "specialCommitments", "title", "validThrough", "workHours", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["baseSalary", "datePosted", "educationRequirements", "employmentType", "estimatedSalary", "experienceRequirements", "hiringOrganization", "incentiveCompensation", "industry", "jobBenefits", "jobLocation", "occupationalCategory", "qualifications", "relevantOccupation", "responsibilities", "salaryCurrency", "skills", "specialCommitments", "title", "validThrough", "workHours"]
        },
        JoinAction: {
            properties: ["event", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["event"]
        },
        LakeBodyOfWater: {
            properties: ["additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Landform: {
            properties: ["additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        LandmarksOrHistoricalBuildings: {
            properties: ["additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Language: {
            properties: ["additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        LeaveAction: {
            properties: ["event", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["event"]
        },
        LegalService: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        LegislativeBuilding: {
            properties: ["openingHours", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        LendAction: {
            properties: ["borrower", "fromLocation", "toLocation", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["borrower"]
        },
        Library: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        LikeAction: {
            properties: ["actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        LiquorStore: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        ListItem: {
            properties: ["item", "nextItem", "position", "previousItem", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["item", "nextItem", "position", "previousItem"]
        },
        ListenAction: {
            properties: ["expectsAcceptanceOf", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        LiteraryEvent: {
            properties: ["about", "actor", "aggregateRating", "attendee", "audience", "composer", "contributor", "director", "doorTime", "duration", "endDate", "eventStatus", "funder", "inLanguage", "isAccessibleForFree", "location", "maximumAttendeeCapacity", "offers", "organizer", "performer", "previousStartDate", "recordedIn", "remainingAttendeeCapacity", "review", "sponsor", "startDate", "subEvent", "superEvent", "translator", "typicalAgeRange", "workFeatured", "workPerformed", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        LiveBlogPosting: {
            properties: ["coverageEndTime", "coverageStartTime", "liveBlogUpdate", "sharedContent", "articleBody", "articleSection", "pageEnd", "pageStart", "pagination", "speakable", "wordCount", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["coverageEndTime", "coverageStartTime", "liveBlogUpdate"]
        },
        LoanOrCredit: {
            properties: ["amount", "currency", "gracePeriod", "loanRepaymentForm", "loanTerm", "loanType", "recourseLoan", "renegotiableLoan", "requiredCollateral", "annualPercentageRate", "feesAndCommissionsSpecification", "interestRate", "aggregateRating", "areaServed", "audience", "availableChannel", "award", "brand", "broker", "category", "hasOfferCatalog", "hoursAvailable", "isRelatedTo", "isSimilarTo", "logo", "offers", "provider", "providerMobility", "review", "serviceOutput", "serviceType", "termsOfService", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["amount", "currency", "gracePeriod", "loanRepaymentForm", "loanTerm", "loanType", "recourseLoan", "renegotiableLoan", "requiredCollateral"]
        },
        LocalBusiness: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange"]
        },
        LocationFeatureSpecification: {
            properties: ["hoursAvailable", "validFrom", "validThrough", "maxValue", "measurementTechnique", "minValue", "propertyID", "unitCode", "unitText", "value", "valueReference", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["hoursAvailable", "validFrom", "validThrough"]
        },
        LockerDelivery: {
            properties: ["supersededBy", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Locksmith: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        LodgingBusiness: {
            properties: ["amenityFeature", "audience", "availableLanguage", "checkinTime", "checkoutTime", "petsAllowed", "starRating", "currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["amenityFeature", "audience", "availableLanguage", "checkinTime", "checkoutTime", "petsAllowed", "starRating"]
        },
        LodgingReservation: {
            properties: ["checkinTime", "checkoutTime", "lodgingUnitDescription", "lodgingUnitType", "numAdults", "numChildren", "bookingTime", "broker", "modifiedTime", "priceCurrency", "programMembershipUsed", "provider", "reservationFor", "reservationId", "reservationStatus", "reservedTicket", "totalPrice", "underName", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["checkinTime", "checkoutTime", "lodgingUnitDescription", "lodgingUnitType", "numAdults", "numChildren"]
        },
        LoseAction: {
            properties: ["winner", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["winner"]
        },
        Map: {
            properties: ["mapType", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["mapType"]
        },
        MapCategoryType: {
            properties: ["supersededBy", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        MarryAction: {
            properties: ["actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Mass: {
            properties: ["additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        MediaObject: {
            properties: ["associatedArticle", "bitrate", "contentSize", "contentUrl", "duration", "embedUrl", "encodesCreativeWork", "encodingFormat", "height", "playerType", "productionCompany", "regionsAllowed", "requiresSubscription", "uploadDate", "width", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["associatedArticle", "bitrate", "contentSize", "contentUrl", "duration", "embedUrl", "encodesCreativeWork", "encodingFormat", "height", "playerType", "productionCompany", "regionsAllowed", "requiresSubscription", "uploadDate", "width"]
        },
        MedicalOrganization: {
            properties: ["healthPlanNetworkId", "isAcceptingNewPatients", "medicalSpecialty", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["healthPlanNetworkId", "isAcceptingNewPatients", "medicalSpecialty"]
        },
        MeetingRoom: {
            properties: ["amenityFeature", "floorSize", "numberOfRooms", "permittedUsage", "petsAllowed", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        MensClothingStore: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Menu: {
            properties: ["hasMenuItem", "hasMenuSection", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["hasMenuItem", "hasMenuSection"]
        },
        MenuItem: {
            properties: ["menuAddOn", "nutrition", "offers", "suitableForDiet", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["menuAddOn", "nutrition", "offers", "suitableForDiet"]
        },
        MenuSection: {
            properties: ["hasMenuItem", "hasMenuSection", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["hasMenuItem", "hasMenuSection"]
        },
        Message: {
            properties: ["bccRecipient", "ccRecipient", "dateRead", "dateReceived", "dateSent", "messageAttachment", "recipient", "sender", "toRecipient", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["bccRecipient", "ccRecipient", "dateRead", "dateReceived", "dateSent", "messageAttachment", "recipient", "sender", "toRecipient"]
        },
        MiddleSchool: {
            properties: ["alumni", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        MobileApplication: {
            properties: ["carrierRequirements", "applicationCategory", "applicationSubCategory", "applicationSuite", "availableOnDevice", "countriesNotSupported", "countriesSupported", "downloadUrl", "featureList", "fileSize", "installUrl", "memoryRequirements", "operatingSystem", "permissions", "processorRequirements", "releaseNotes", "screenshot", "softwareAddOn", "softwareHelp", "softwareRequirements", "softwareVersion", "storageRequirements", "supportingData", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["carrierRequirements"]
        },
        MobilePhoneStore: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        MonetaryAmount: {
            properties: [],
            specific_properties: []
        },
        Mosque: {
            properties: ["openingHours", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Motel: {
            properties: ["amenityFeature", "audience", "availableLanguage", "checkinTime", "checkoutTime", "petsAllowed", "starRating", "currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        MotorcycleDealer: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        MotorcycleRepair: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Mountain: {
            properties: ["additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        MoveAction: {
            properties: ["fromLocation", "toLocation", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["fromLocation", "toLocation"]
        },
        Movie: {
            properties: ["actor", "countryOfOrigin", "director", "duration", "musicBy", "productionCompany", "subtitleLanguage", "trailer", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["actor", "countryOfOrigin", "director", "duration", "musicBy", "productionCompany", "subtitleLanguage", "trailer"]
        },
        MovieClip: {
            properties: ["actor", "clipNumber", "director", "musicBy", "partOfEpisode", "partOfSeason", "partOfSeries", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        MovieRentalStore: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        MovieSeries: {
            properties: ["actor", "director", "musicBy", "productionCompany", "trailer", "endDate", "issn", "startDate", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["actor", "director", "musicBy", "productionCompany", "trailer"]
        },
        MovieTheater: {
            properties: ["screenCount", "currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "openingHours", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["screenCount"]
        },
        MovingCompany: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Museum: {
            properties: ["openingHours", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        MusicAlbum: {
            properties: ["albumProductionType", "albumRelease", "albumReleaseType", "byArtist", "numTracks", "track", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["albumProductionType", "albumRelease", "albumReleaseType", "byArtist"]
        },
        MusicAlbumProductionType: {
            properties: ["supersededBy", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        MusicAlbumReleaseType: {
            properties: ["supersededBy", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        MusicComposition: {
            properties: ["composer", "firstPerformance", "includedComposition", "iswcCode", "lyricist", "lyrics", "musicArrangement", "musicCompositionForm", "musicalKey", "recordedAs", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["composer", "firstPerformance", "includedComposition", "iswcCode", "lyricist", "lyrics", "musicArrangement", "musicCompositionForm", "musicalKey", "recordedAs"]
        },
        MusicEvent: {
            properties: ["about", "actor", "aggregateRating", "attendee", "audience", "composer", "contributor", "director", "doorTime", "duration", "endDate", "eventStatus", "funder", "inLanguage", "isAccessibleForFree", "location", "maximumAttendeeCapacity", "offers", "organizer", "performer", "previousStartDate", "recordedIn", "remainingAttendeeCapacity", "review", "sponsor", "startDate", "subEvent", "superEvent", "translator", "typicalAgeRange", "workFeatured", "workPerformed", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        MusicGroup: {
            properties: ["album", "genre", "track", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["album", "genre", "track"]
        },
        MusicPlaylist: {
            properties: ["numTracks", "track", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["numTracks", "track"]
        },
        MusicRecording: {
            properties: ["byArtist", "duration", "inAlbum", "inPlaylist", "isrcCode", "recordingOf", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["byArtist", "duration", "inAlbum", "inPlaylist", "isrcCode", "recordingOf"]
        },
        MusicRelease: {
            properties: ["catalogNumber", "creditedTo", "duration", "musicReleaseFormat", "recordLabel", "releaseOf", "numTracks", "track", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["catalogNumber", "creditedTo", "duration", "musicReleaseFormat", "recordLabel", "releaseOf"]
        },
        MusicReleaseFormatType: {
            properties: ["supersededBy", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        MusicStore: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        MusicVenue: {
            properties: ["openingHours", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        MusicVideoObject: {
            properties: ["associatedArticle", "bitrate", "contentSize", "contentUrl", "duration", "embedUrl", "encodesCreativeWork", "encodingFormat", "height", "playerType", "productionCompany", "regionsAllowed", "requiresSubscription", "uploadDate", "width", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        NGO: {
            properties: ["actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        NailSalon: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        NewsArticle: {
            properties: ["dateline", "printColumn", "printEdition", "printPage", "printSection", "articleBody", "articleSection", "pageEnd", "pageStart", "pagination", "speakable", "wordCount", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["dateline", "printColumn", "printEdition", "printPage", "printSection"]
        },
        NightClub: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Notary: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        NoteDigitalDocument: {
            properties: ["hasDigitalDocumentPermission", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        NutritionInformation: {
            properties: ["calories", "carbohydrateContent", "cholesterolContent", "fatContent", "fiberContent", "proteinContent", "saturatedFatContent", "servingSize", "sodiumContent", "sugarContent", "transFatContent", "unsaturatedFatContent", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["calories", "carbohydrateContent", "cholesterolContent", "fatContent", "fiberContent", "proteinContent", "saturatedFatContent", "servingSize", "sodiumContent", "sugarContent", "transFatContent", "unsaturatedFatContent"]
        },
        OceanBodyOfWater: {
            properties: ["additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Offer: {
            properties: ["acceptedPaymentMethod", "addOn", "advanceBookingRequirement", "aggregateRating", "areaServed", "availability", "availabilityEnds", "availabilityStarts", "availableAtOrFrom", "availableDeliveryMethod", "businessFunction", "category", "deliveryLeadTime", "eligibleCustomerType", "eligibleDuration", "eligibleQuantity", "eligibleRegion", "eligibleTransactionVolume", "gtin12", "gtin13", "gtin14", "gtin8", "includesObject", "ineligibleRegion", "inventoryLevel", "itemCondition", "itemOffered", "mpn", "offeredBy", "price", "priceCurrency", "priceSpecification", "priceValidUntil", "review", "seller", "serialNumber", "sku", "validFrom", "validThrough", "warranty", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["acceptedPaymentMethod", "addOn", "advanceBookingRequirement", "aggregateRating", "areaServed", "availability", "availabilityEnds", "availabilityStarts", "availableAtOrFrom", "availableDeliveryMethod", "businessFunction", "category", "deliveryLeadTime", "eligibleCustomerType", "eligibleDuration", "eligibleQuantity", "eligibleRegion", "eligibleTransactionVolume", "gtin12", "gtin13", "gtin14", "gtin8", "includesObject", "ineligibleRegion", "inventoryLevel", "itemCondition", "itemOffered", "mpn", "offeredBy", "price", "priceCurrency", "priceSpecification", "priceValidUntil", "review", "seller", "serialNumber", "sku", "validFrom", "validThrough", "warranty"]
        },
        OfferCatalog: {
            properties: ["itemListElement", "itemListOrder", "numberOfItems", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        OfferItemCondition: {
            properties: ["supersededBy", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        OfficeEquipmentStore: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        OnDemandEvent: {
            properties: ["isAccessibleForFree", "publishedBy", "publishedOn", "about", "actor", "aggregateRating", "attendee", "audience", "composer", "contributor", "director", "doorTime", "duration", "endDate", "eventStatus", "funder", "inLanguage", "isAccessibleForFree", "location", "maximumAttendeeCapacity", "offers", "organizer", "performer", "previousStartDate", "recordedIn", "remainingAttendeeCapacity", "review", "sponsor", "startDate", "subEvent", "superEvent", "translator", "typicalAgeRange", "workFeatured", "workPerformed", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        OpeningHoursSpecification: {
            properties: ["closes", "dayOfWeek", "opens", "validFrom", "validThrough", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["closes", "dayOfWeek", "opens", "validFrom", "validThrough"]
        },
        Order: {
            properties: ["acceptedOffer", "billingAddress", "broker", "confirmationNumber", "customer", "discount", "discountCode", "discountCurrency", "isGift", "orderDate", "orderDelivery", "orderNumber", "orderStatus", "orderedItem", "partOfInvoice", "paymentDueDate", "paymentMethod", "paymentMethodId", "paymentUrl", "seller", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["acceptedOffer", "billingAddress", "broker", "confirmationNumber", "customer", "discount", "discountCode", "discountCurrency", "isGift", "orderDate", "orderDelivery", "orderNumber", "orderStatus", "orderedItem", "partOfInvoice", "paymentDueDate", "paymentMethod", "paymentMethodId", "paymentUrl", "seller"]
        },
        OrderAction: {
            properties: ["deliveryMethod", "price", "priceSpecification", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["deliveryMethod"]
        },
        OrderItem: {
            properties: ["orderDelivery", "orderItemNumber", "orderItemStatus", "orderQuantity", "orderedItem", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["orderDelivery", "orderItemNumber", "orderItemStatus", "orderQuantity", "orderedItem"]
        },
        OrderStatus: {
            properties: ["supersededBy", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Organization: {
            properties: ["actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID"]
        },
        OrganizationRole: {
            properties: ["numberedPosition", "endDate", "roleName", "startDate", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["numberedPosition"]
        },
        OrganizeAction: {
            properties: ["actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        OutletStore: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        OwnershipInfo: {
            properties: ["acquiredFrom", "ownedFrom", "ownedThrough", "typeOfGood", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["acquiredFrom", "ownedFrom", "ownedThrough", "typeOfGood"]
        },
        PaintAction: {
            properties: ["actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Painting: {
            properties: ["about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        ParcelDelivery: {
            properties: ["deliveryAddress", "deliveryStatus", "expectedArrivalFrom", "expectedArrivalUntil", "hasDeliveryMethod", "itemShipped", "originAddress", "partOfOrder", "provider", "trackingNumber", "trackingUrl", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["deliveryAddress", "deliveryStatus", "expectedArrivalFrom", "expectedArrivalUntil", "hasDeliveryMethod", "itemShipped", "originAddress", "partOfOrder", "provider", "trackingNumber", "trackingUrl"]
        },
        ParcelService: {
            properties: ["supersededBy", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        ParentAudience: {
            properties: ["childMaxAge", "childMinAge", "healthCondition", "requiredGender", "requiredMaxAge", "requiredMinAge", "suggestedGender", "suggestedMaxAge", "suggestedMinAge", "audienceType", "geographicArea", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["childMaxAge", "childMinAge"]
        },
        Park: {
            properties: ["openingHours", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        ParkingFacility: {
            properties: ["openingHours", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        PawnShop: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        PayAction: {
            properties: ["purpose", "recipient", "price", "priceSpecification", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["purpose", "recipient"]
        },
        PaymentCard: {
            properties: ["cashBack", "contactlessPayment", "floorLimit", "supersededBy", "annualPercentageRate", "feesAndCommissionsSpecification", "interestRate", "aggregateRating", "areaServed", "audience", "availableChannel", "award", "brand", "broker", "category", "hasOfferCatalog", "hoursAvailable", "isRelatedTo", "isSimilarTo", "logo", "offers", "provider", "providerMobility", "review", "serviceOutput", "serviceType", "termsOfService", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["cashBack", "contactlessPayment", "floorLimit"]
        },
        PaymentChargeSpecification: {
            properties: ["appliesToDeliveryMethod", "appliesToPaymentMethod", "eligibleQuantity", "eligibleTransactionVolume", "maxPrice", "minPrice", "price", "priceCurrency", "validFrom", "validThrough", "valueAddedTaxIncluded", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["appliesToDeliveryMethod", "appliesToPaymentMethod"]
        },
        PaymentMethod: {
            properties: ["supersededBy", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        PaymentService: {
            properties: ["annualPercentageRate", "feesAndCommissionsSpecification", "interestRate", "aggregateRating", "areaServed", "audience", "availableChannel", "award", "brand", "broker", "category", "hasOfferCatalog", "hoursAvailable", "isRelatedTo", "isSimilarTo", "logo", "offers", "provider", "providerMobility", "review", "serviceOutput", "serviceType", "termsOfService", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        PaymentStatusType: {
            properties: ["supersededBy", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        PeopleAudience: {
            properties: ["healthCondition", "requiredGender", "requiredMaxAge", "requiredMinAge", "suggestedGender", "suggestedMaxAge", "suggestedMinAge", "audienceType", "geographicArea", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["healthCondition", "requiredGender", "requiredMaxAge", "requiredMinAge", "suggestedGender", "suggestedMaxAge", "suggestedMinAge"]
        },
        PerformAction: {
            properties: ["entertainmentBusiness", "audience", "event", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["entertainmentBusiness"]
        },
        PerformanceRole: {
            properties: ["characterName", "endDate", "roleName", "startDate", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["characterName"]
        },
        PerformingArtsTheater: {
            properties: ["openingHours", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        PerformingGroup: {
            properties: ["actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Periodical: {
            properties: ["endDate", "issn", "startDate", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Permit: {
            properties: ["issuedBy", "issuedThrough", "permitAudience", "validFor", "validFrom", "validIn", "validUntil", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["issuedBy", "issuedThrough", "permitAudience", "validFor", "validFrom", "validIn", "validUntil"]
        },
        Person: {
            properties: ["additionalName", "address", "affiliation", "alumniOf", "award", "birthDate", "birthPlace", "brand", "children", "colleague", "contactPoint", "deathDate", "deathPlace", "duns", "email", "familyName", "faxNumber", "follows", "funder", "gender", "givenName", "globalLocationNumber", "hasOccupation", "hasOfferCatalog", "hasPOS", "height", "homeLocation", "honorificPrefix", "honorificSuffix", "isicV4", "jobTitle", "knows", "makesOffer", "memberOf", "naics", "nationality", "netWorth", "owns", "parent", "performerIn", "publishingPrinciples", "relatedTo", "seeks", "sibling", "sponsor", "spouse", "taxID", "telephone", "vatID", "weight", "workLocation", "worksFor", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["additionalName", "address", "affiliation", "alumniOf", "award", "birthDate", "birthPlace", "brand", "children", "colleague", "contactPoint", "deathDate", "deathPlace", "duns", "email", "familyName", "faxNumber", "follows", "funder", "gender", "givenName", "globalLocationNumber", "hasOccupation", "hasOfferCatalog", "hasPOS", "height", "homeLocation", "honorificPrefix", "honorificSuffix", "isicV4", "jobTitle", "knows", "makesOffer", "memberOf", "naics", "nationality", "netWorth", "owns", "parent", "performerIn", "publishingPrinciples", "relatedTo", "seeks", "sibling", "sponsor", "spouse", "taxID", "telephone", "vatID", "weight", "workLocation", "worksFor"]
        },
        PetStore: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Pharmacy: {
            properties: ["healthPlanNetworkId", "isAcceptingNewPatients", "medicalSpecialty", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Photograph: {
            properties: ["about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        PhotographAction: {
            properties: ["actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Physician: {
            properties: ["availableService", "hospitalAffiliation", "medicalSpecialty", "healthPlanNetworkId", "isAcceptingNewPatients", "medicalSpecialty", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["availableService", "hospitalAffiliation", "medicalSpecialty"]
        },
        Place: {
            properties: ["additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone"]
        },
        PlaceOfWorship: {
            properties: ["openingHours", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        PlanAction: {
            properties: ["scheduledTime", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["scheduledTime"]
        },
        PlayAction: {
            properties: ["audience", "event", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["audience", "event"]
        },
        Playground: {
            properties: ["openingHours", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Plumber: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        PoliceStation: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "openingHours", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Pond: {
            properties: ["additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        PostOffice: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        PostalAddress: {
            properties: ["addressCountry", "addressLocality", "addressRegion", "postOfficeBoxNumber", "postalCode", "streetAddress", "areaServed", "availableLanguage", "contactOption", "contactType", "email", "faxNumber", "hoursAvailable", "productSupported", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["addressCountry", "addressLocality", "addressRegion", "postOfficeBoxNumber", "postalCode", "streetAddress"]
        },
        PrependAction: {
            properties: ["toLocation", "targetCollection", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Preschool: {
            properties: ["alumni", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        PresentationDigitalDocument: {
            properties: ["hasDigitalDocumentPermission", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        PriceSpecification: {
            properties: ["eligibleQuantity", "eligibleTransactionVolume", "maxPrice", "minPrice", "price", "priceCurrency", "validFrom", "validThrough", "valueAddedTaxIncluded", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["eligibleQuantity", "eligibleTransactionVolume", "maxPrice", "minPrice", "price", "priceCurrency", "validFrom", "validThrough", "valueAddedTaxIncluded"]
        },
        Product: {
            properties: ["additionalProperty", "aggregateRating", "audience", "award", "brand", "category", "color", "depth", "gtin12", "gtin13", "gtin14", "gtin8", "height", "isAccessoryOrSparePartFor", "isConsumableFor", "isRelatedTo", "isSimilarTo", "itemCondition", "logo", "manufacturer", "material", "model", "mpn", "offers", "productID", "productionDate", "purchaseDate", "releaseDate", "review", "sku", "weight", "width", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["additionalProperty", "aggregateRating", "audience", "award", "brand", "category", "color", "depth", "gtin12", "gtin13", "gtin14", "gtin8", "height", "isAccessoryOrSparePartFor", "isConsumableFor", "isRelatedTo", "isSimilarTo", "itemCondition", "logo", "manufacturer", "material", "model", "mpn", "offers", "productID", "productionDate", "purchaseDate", "releaseDate", "review", "sku", "weight", "width"]
        },
        ProductModel: {
            properties: ["isVariantOf", "predecessorOf", "successorOf", "additionalProperty", "aggregateRating", "audience", "award", "brand", "category", "color", "depth", "gtin12", "gtin13", "gtin14", "gtin8", "height", "isAccessoryOrSparePartFor", "isConsumableFor", "isRelatedTo", "isSimilarTo", "itemCondition", "logo", "manufacturer", "material", "model", "mpn", "offers", "productID", "productionDate", "purchaseDate", "releaseDate", "review", "sku", "weight", "width", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["isVariantOf", "predecessorOf", "successorOf"]
        },
        ProfessionalService: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        ProfilePage: {
            properties: ["breadcrumb", "lastReviewed", "mainContentOfPage", "primaryImageOfPage", "relatedLink", "reviewedBy", "significantLink", "speakable", "specialty", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        ProgramMembership: {
            properties: ["hostingOrganization", "member", "membershipNumber", "programName", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["hostingOrganization", "member", "membershipNumber", "programName"]
        },
        PropertyValue: {
            properties: ["maxValue", "measurementTechnique", "minValue", "propertyID", "unitCode", "unitText", "value", "valueReference", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["maxValue", "measurementTechnique", "minValue", "propertyID", "unitCode", "unitText", "value", "valueReference"]
        },
        PropertyValueSpecification: {
            properties: ["defaultValue", "maxValue", "minValue", "multipleValues", "readonlyValue", "stepValue", "valueMaxLength", "valueMinLength", "valueName", "valuePattern", "valueRequired", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["defaultValue", "maxValue", "minValue", "multipleValues", "readonlyValue", "stepValue", "valueMaxLength", "valueMinLength", "valueName", "valuePattern", "valueRequired"]
        },
        PublicSwimmingPool: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        PublicationEvent: {
            properties: ["isAccessibleForFree", "publishedBy", "publishedOn", "about", "actor", "aggregateRating", "attendee", "audience", "composer", "contributor", "director", "doorTime", "duration", "endDate", "eventStatus", "funder", "inLanguage", "isAccessibleForFree", "location", "maximumAttendeeCapacity", "offers", "organizer", "performer", "previousStartDate", "recordedIn", "remainingAttendeeCapacity", "review", "sponsor", "startDate", "subEvent", "superEvent", "translator", "typicalAgeRange", "workFeatured", "workPerformed", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["isAccessibleForFree", "publishedBy", "publishedOn"]
        },
        PublicationIssue: {
            properties: ["issueNumber", "pageEnd", "pageStart", "pagination", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["issueNumber", "pageEnd", "pageStart", "pagination"]
        },
        PublicationVolume: {
            properties: ["pageEnd", "pageStart", "pagination", "volumeNumber", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["pageEnd", "pageStart", "pagination", "volumeNumber"]
        },
        QAPage: {
            properties: ["breadcrumb", "lastReviewed", "mainContentOfPage", "primaryImageOfPage", "relatedLink", "reviewedBy", "significantLink", "speakable", "specialty", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        QualitativeValue: {
            properties: ["additionalProperty", "equal", "greater", "greaterOrEqual", "lesser", "lesserOrEqual", "nonEqual", "valueReference", "supersededBy", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["additionalProperty", "equal", "greater", "greaterOrEqual", "lesser", "lesserOrEqual", "nonEqual", "valueReference"]
        },
        QuantitativeValue: {
            properties: ["additionalProperty", "maxValue", "minValue", "unitCode", "unitText", "value", "valueReference", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["additionalProperty", "maxValue", "minValue", "unitCode", "unitText", "value", "valueReference"]
        },
        Quantity: {
            properties: ["additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Question: {
            properties: ["acceptedAnswer", "answerCount", "downvoteCount", "suggestedAnswer", "upvoteCount", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["acceptedAnswer", "answerCount", "downvoteCount", "suggestedAnswer", "upvoteCount"]
        },
        QuoteAction: {
            properties: ["price", "priceSpecification", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        RVPark: {
            properties: ["openingHours", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        RadioChannel: {
            properties: ["broadcastChannelId", "broadcastFrequency", "broadcastServiceTier", "genre", "inBroadcastLineup", "providesBroadcastService", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        RadioClip: {
            properties: ["actor", "clipNumber", "director", "musicBy", "partOfEpisode", "partOfSeason", "partOfSeries", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        RadioEpisode: {
            properties: ["actor", "director", "episodeNumber", "musicBy", "partOfSeason", "partOfSeries", "productionCompany", "trailer", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        RadioSeason: {
            properties: ["actor", "director", "endDate", "episode", "numberOfEpisodes", "partOfSeries", "productionCompany", "seasonNumber", "startDate", "trailer", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        RadioSeries: {
            properties: ["actor", "containsSeason", "director", "episode", "musicBy", "numberOfEpisodes", "numberOfSeasons", "productionCompany", "trailer", "endDate", "issn", "startDate", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["actor", "containsSeason", "director", "episode", "musicBy", "numberOfEpisodes", "numberOfSeasons", "productionCompany", "trailer"]
        },
        RadioStation: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Rating: {
            properties: ["author", "bestRating", "ratingValue", "reviewAspect", "worstRating", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["author", "bestRating", "ratingValue", "reviewAspect", "worstRating"]
        },
        ReactAction: {
            properties: ["actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        ReadAction: {
            properties: ["expectsAcceptanceOf", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        RealEstateAgent: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        ReceiveAction: {
            properties: ["deliveryMethod", "sender", "fromLocation", "toLocation", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["deliveryMethod", "sender"]
        },
        Recipe: {
            properties: ["cookTime", "cookingMethod", "nutrition", "recipeCategory", "recipeCuisine", "recipeIngredient", "recipeInstructions", "recipeYield", "suitableForDiet", "estimatedCost", "performTime", "prepTime", "step", "supply", "tool", "totalTime", "yield", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["cookTime", "cookingMethod", "nutrition", "recipeCategory", "recipeCuisine", "recipeIngredient", "recipeInstructions", "recipeYield", "suitableForDiet"]
        },
        RecyclingCenter: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        RegisterAction: {
            properties: ["actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        RejectAction: {
            properties: ["purpose", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        RentAction: {
            properties: ["landlord", "realEstateAgent", "price", "priceSpecification", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["landlord", "realEstateAgent"]
        },
        RentalCarReservation: {
            properties: ["dropoffLocation", "dropoffTime", "pickupLocation", "pickupTime", "bookingTime", "broker", "modifiedTime", "priceCurrency", "programMembershipUsed", "provider", "reservationFor", "reservationId", "reservationStatus", "reservedTicket", "totalPrice", "underName", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["dropoffLocation", "dropoffTime", "pickupLocation", "pickupTime"]
        },
        ReplaceAction: {
            properties: ["replacee", "replacer", "targetCollection", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["replacee", "replacer"]
        },
        ReplyAction: {
            properties: ["resultComment", "about", "inLanguage", "recipient", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["resultComment"]
        },
        Report: {
            properties: ["reportNumber", "articleBody", "articleSection", "pageEnd", "pageStart", "pagination", "speakable", "wordCount", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["reportNumber"]
        },
        Reservation: {
            properties: ["bookingTime", "broker", "modifiedTime", "priceCurrency", "programMembershipUsed", "provider", "reservationFor", "reservationId", "reservationStatus", "reservedTicket", "totalPrice", "underName", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["bookingTime", "broker", "modifiedTime", "priceCurrency", "programMembershipUsed", "provider", "reservationFor", "reservationId", "reservationStatus", "reservedTicket", "totalPrice", "underName"]
        },
        ReservationPackage: {
            properties: ["subReservation", "bookingTime", "broker", "modifiedTime", "priceCurrency", "programMembershipUsed", "provider", "reservationFor", "reservationId", "reservationStatus", "reservedTicket", "totalPrice", "underName", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["subReservation"]
        },
        ReservationStatusType: {
            properties: ["supersededBy", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        ReserveAction: {
            properties: ["scheduledTime", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Reservoir: {
            properties: ["additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Residence: {
            properties: ["additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Resort: {
            properties: ["amenityFeature", "audience", "availableLanguage", "checkinTime", "checkoutTime", "petsAllowed", "starRating", "currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Restaurant: {
            properties: ["acceptsReservations", "hasMenu", "servesCuisine", "starRating", "currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        RestrictedDiet: {
            properties: ["supersededBy", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        ResumeAction: {
            properties: ["actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        ReturnAction: {
            properties: ["recipient", "fromLocation", "toLocation", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["recipient"]
        },
        Review: {
            properties: ["itemReviewed", "reviewAspect", "reviewBody", "reviewRating", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["itemReviewed", "reviewAspect", "reviewBody", "reviewRating"]
        },
        ReviewAction: {
            properties: ["resultReview", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["resultReview"]
        },
        RiverBodyOfWater: {
            properties: ["additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Role: {
            properties: ["endDate", "roleName", "startDate", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["endDate", "roleName", "startDate"]
        },
        RoofingContractor: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Room: {
            properties: ["amenityFeature", "floorSize", "numberOfRooms", "permittedUsage", "petsAllowed", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        RsvpAction: {
            properties: ["additionalNumberOfGuests", "comment", "rsvpResponse", "event", "about", "inLanguage", "recipient", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["additionalNumberOfGuests", "comment", "rsvpResponse"]
        },
        RsvpResponseType: {
            properties: ["supersededBy", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        SaleEvent: {
            properties: ["about", "actor", "aggregateRating", "attendee", "audience", "composer", "contributor", "director", "doorTime", "duration", "endDate", "eventStatus", "funder", "inLanguage", "isAccessibleForFree", "location", "maximumAttendeeCapacity", "offers", "organizer", "performer", "previousStartDate", "recordedIn", "remainingAttendeeCapacity", "review", "sponsor", "startDate", "subEvent", "superEvent", "translator", "typicalAgeRange", "workFeatured", "workPerformed", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        ScheduleAction: {
            properties: ["scheduledTime", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        ScholarlyArticle: {
            properties: ["articleBody", "articleSection", "pageEnd", "pageStart", "pagination", "speakable", "wordCount", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        School: {
            properties: ["alumni", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        ScreeningEvent: {
            properties: ["subtitleLanguage", "videoFormat", "workPresented", "about", "actor", "aggregateRating", "attendee", "audience", "composer", "contributor", "director", "doorTime", "duration", "endDate", "eventStatus", "funder", "inLanguage", "isAccessibleForFree", "location", "maximumAttendeeCapacity", "offers", "organizer", "performer", "previousStartDate", "recordedIn", "remainingAttendeeCapacity", "review", "sponsor", "startDate", "subEvent", "superEvent", "translator", "typicalAgeRange", "workFeatured", "workPerformed", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["subtitleLanguage", "videoFormat", "workPresented"]
        },
        Sculpture: {
            properties: ["about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        SeaBodyOfWater: {
            properties: ["additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        SearchAction: {
            properties: ["query", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["query"]
        },
        SearchResultsPage: {
            properties: ["breadcrumb", "lastReviewed", "mainContentOfPage", "primaryImageOfPage", "relatedLink", "reviewedBy", "significantLink", "speakable", "specialty", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Seat: {
            properties: ["seatNumber", "seatRow", "seatSection", "seatingType", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["seatNumber", "seatRow", "seatSection", "seatingType"]
        },
        SelfStorage: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        SellAction: {
            properties: ["buyer", "price", "priceSpecification", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["buyer"]
        },
        SendAction: {
            properties: ["deliveryMethod", "recipient", "fromLocation", "toLocation", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["deliveryMethod", "recipient"]
        },
        Series: {
            properties: ["about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Service: {
            properties: ["aggregateRating", "areaServed", "audience", "availableChannel", "award", "brand", "broker", "category", "hasOfferCatalog", "hoursAvailable", "isRelatedTo", "isSimilarTo", "logo", "offers", "provider", "providerMobility", "review", "serviceOutput", "serviceType", "termsOfService", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["aggregateRating", "areaServed", "audience", "availableChannel", "award", "brand", "broker", "category", "hasOfferCatalog", "hoursAvailable", "isRelatedTo", "isSimilarTo", "logo", "offers", "provider", "providerMobility", "review", "serviceOutput", "serviceType", "termsOfService"]
        },
        ServiceChannel: {
            properties: ["availableLanguage", "processingTime", "providesService", "serviceLocation", "servicePhone", "servicePostalAddress", "serviceSmsNumber", "serviceUrl", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["availableLanguage", "processingTime", "providesService", "serviceLocation", "servicePhone", "servicePostalAddress", "serviceSmsNumber", "serviceUrl"]
        },
        ShareAction: {
            properties: ["about", "inLanguage", "recipient", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        ShoeStore: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        ShoppingCenter: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        SingleFamilyResidence: {
            properties: ["numberOfRooms", "occupancy", "numberOfRooms", "amenityFeature", "floorSize", "numberOfRooms", "permittedUsage", "petsAllowed", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["numberOfRooms", "occupancy"]
        },
        SiteNavigationElement: {
            properties: ["cssSelector", "xpath", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        SkiResort: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        SocialEvent: {
            properties: ["about", "actor", "aggregateRating", "attendee", "audience", "composer", "contributor", "director", "doorTime", "duration", "endDate", "eventStatus", "funder", "inLanguage", "isAccessibleForFree", "location", "maximumAttendeeCapacity", "offers", "organizer", "performer", "previousStartDate", "recordedIn", "remainingAttendeeCapacity", "review", "sponsor", "startDate", "subEvent", "superEvent", "translator", "typicalAgeRange", "workFeatured", "workPerformed", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        SocialMediaPosting: {
            properties: ["sharedContent", "articleBody", "articleSection", "pageEnd", "pageStart", "pagination", "speakable", "wordCount", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["sharedContent"]
        },
        SoftwareApplication: {
            properties: ["applicationCategory", "applicationSubCategory", "applicationSuite", "availableOnDevice", "countriesNotSupported", "countriesSupported", "downloadUrl", "featureList", "fileSize", "installUrl", "memoryRequirements", "operatingSystem", "permissions", "processorRequirements", "releaseNotes", "screenshot", "softwareAddOn", "softwareHelp", "softwareRequirements", "softwareVersion", "storageRequirements", "supportingData", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["applicationCategory", "applicationSubCategory", "applicationSuite", "availableOnDevice", "countriesNotSupported", "countriesSupported", "downloadUrl", "featureList", "fileSize", "installUrl", "memoryRequirements", "operatingSystem", "permissions", "processorRequirements", "releaseNotes", "screenshot", "softwareAddOn", "softwareHelp", "softwareRequirements", "softwareVersion", "storageRequirements", "supportingData"]
        },
        SoftwareSourceCode: {
            properties: ["codeRepository", "codeSampleType", "programmingLanguage", "runtimePlatform", "targetProduct", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["codeRepository", "codeSampleType", "programmingLanguage", "runtimePlatform", "targetProduct"]
        },
        SomeProducts: {
            properties: ["inventoryLevel", "additionalProperty", "aggregateRating", "audience", "award", "brand", "category", "color", "depth", "gtin12", "gtin13", "gtin14", "gtin8", "height", "isAccessoryOrSparePartFor", "isConsumableFor", "isRelatedTo", "isSimilarTo", "itemCondition", "logo", "manufacturer", "material", "model", "mpn", "offers", "productID", "productionDate", "purchaseDate", "releaseDate", "review", "sku", "weight", "width", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["inventoryLevel"]
        },
        Specialty: {
            properties: ["supersededBy", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        SportingGoodsStore: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        SportsActivityLocation: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        SportsClub: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        SportsEvent: {
            properties: ["awayTeam", "competitor", "homeTeam", "about", "actor", "aggregateRating", "attendee", "audience", "composer", "contributor", "director", "doorTime", "duration", "endDate", "eventStatus", "funder", "inLanguage", "isAccessibleForFree", "location", "maximumAttendeeCapacity", "offers", "organizer", "performer", "previousStartDate", "recordedIn", "remainingAttendeeCapacity", "review", "sponsor", "startDate", "subEvent", "superEvent", "translator", "typicalAgeRange", "workFeatured", "workPerformed", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["awayTeam", "competitor", "homeTeam"]
        },
        SportsOrganization: {
            properties: ["sport", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["sport"]
        },
        SportsTeam: {
            properties: ["athlete", "coach", "sport", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["athlete", "coach"]
        },
        SpreadsheetDigitalDocument: {
            properties: ["hasDigitalDocumentPermission", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        StadiumOrArena: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "openingHours", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        State: {
            properties: ["additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        SteeringPositionValue: {
            properties: ["additionalProperty", "equal", "greater", "greaterOrEqual", "lesser", "lesserOrEqual", "nonEqual", "valueReference", "supersededBy", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Store: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        StructuredValue: {
            properties: ["additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        SubscribeAction: {
            properties: ["actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        SubwayStation: {
            properties: ["openingHours", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Suite: {
            properties: ["bed", "numberOfRooms", "occupancy", "amenityFeature", "floorSize", "numberOfRooms", "permittedUsage", "petsAllowed", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["bed", "numberOfRooms", "occupancy"]
        },
        SuspendAction: {
            properties: ["actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Synagogue: {
            properties: ["openingHours", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        TVClip: {
            properties: ["actor", "clipNumber", "director", "musicBy", "partOfEpisode", "partOfSeason", "partOfSeries", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        TVEpisode: {
            properties: ["countryOfOrigin", "subtitleLanguage", "actor", "director", "episodeNumber", "musicBy", "partOfSeason", "partOfSeries", "productionCompany", "trailer", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["countryOfOrigin", "subtitleLanguage"]
        },
        TVSeason: {
            properties: ["countryOfOrigin", "actor", "director", "endDate", "episode", "numberOfEpisodes", "partOfSeries", "productionCompany", "seasonNumber", "startDate", "trailer", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["countryOfOrigin"]
        },
        TVSeries: {
            properties: ["actor", "containsSeason", "countryOfOrigin", "director", "episode", "musicBy", "numberOfEpisodes", "numberOfSeasons", "productionCompany", "trailer", "endDate", "issn", "startDate", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["actor", "containsSeason", "countryOfOrigin", "director", "episode", "musicBy", "numberOfEpisodes", "numberOfSeasons", "productionCompany", "trailer"]
        },
        Table: {
            properties: ["cssSelector", "xpath", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        TakeAction: {
            properties: ["fromLocation", "toLocation", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        TattooParlor: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        TaxiReservation: {
            properties: ["partySize", "pickupLocation", "pickupTime", "bookingTime", "broker", "modifiedTime", "priceCurrency", "programMembershipUsed", "provider", "reservationFor", "reservationId", "reservationStatus", "reservedTicket", "totalPrice", "underName", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["partySize", "pickupLocation", "pickupTime"]
        },
        TaxiService: {
            properties: ["aggregateRating", "areaServed", "audience", "availableChannel", "award", "brand", "broker", "category", "hasOfferCatalog", "hoursAvailable", "isRelatedTo", "isSimilarTo", "logo", "offers", "provider", "providerMobility", "review", "serviceOutput", "serviceType", "termsOfService", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        TaxiStand: {
            properties: ["openingHours", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        TechArticle: {
            properties: ["dependencies", "proficiencyLevel", "articleBody", "articleSection", "pageEnd", "pageStart", "pagination", "speakable", "wordCount", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["dependencies", "proficiencyLevel"]
        },
        TelevisionChannel: {
            properties: ["broadcastChannelId", "broadcastFrequency", "broadcastServiceTier", "genre", "inBroadcastLineup", "providesBroadcastService", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        TelevisionStation: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        TennisComplex: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        TextDigitalDocument: {
            properties: ["hasDigitalDocumentPermission", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        TheaterEvent: {
            properties: ["about", "actor", "aggregateRating", "attendee", "audience", "composer", "contributor", "director", "doorTime", "duration", "endDate", "eventStatus", "funder", "inLanguage", "isAccessibleForFree", "location", "maximumAttendeeCapacity", "offers", "organizer", "performer", "previousStartDate", "recordedIn", "remainingAttendeeCapacity", "review", "sponsor", "startDate", "subEvent", "superEvent", "translator", "typicalAgeRange", "workFeatured", "workPerformed", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        TheaterGroup: {
            properties: ["actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Thing: {
            properties: ["additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"]
        },
        Ticket: {
            properties: ["dateIssued", "issuedBy", "priceCurrency", "ticketNumber", "ticketToken", "ticketedSeat", "totalPrice", "underName", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["dateIssued", "issuedBy", "priceCurrency", "ticketNumber", "ticketToken", "ticketedSeat", "totalPrice", "underName"]
        },
        TieAction: {
            properties: ["actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        TipAction: {
            properties: ["recipient", "price", "priceSpecification", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["recipient"]
        },
        TireShop: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        TouristAttraction: {
            properties: ["availableLanguage", "touristType", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["availableLanguage", "touristType"]
        },
        TouristInformationCenter: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        ToyStore: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        TrackAction: {
            properties: ["deliveryMethod", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["deliveryMethod"]
        },
        TradeAction: {
            properties: ["price", "priceSpecification", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["price", "priceSpecification"]
        },
        TrainReservation: {
            properties: ["bookingTime", "broker", "modifiedTime", "priceCurrency", "programMembershipUsed", "provider", "reservationFor", "reservationId", "reservationStatus", "reservedTicket", "totalPrice", "underName", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        TrainStation: {
            properties: ["openingHours", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        TrainTrip: {
            properties: ["arrivalPlatform", "arrivalStation", "arrivalTime", "departurePlatform", "departureStation", "departureTime", "provider", "trainName", "trainNumber", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["arrivalPlatform", "arrivalStation", "arrivalTime", "departurePlatform", "departureStation", "departureTime", "provider", "trainName", "trainNumber"]
        },
        TransferAction: {
            properties: ["fromLocation", "toLocation", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["fromLocation", "toLocation"]
        },
        TravelAction: {
            properties: ["distance", "fromLocation", "toLocation", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["distance"]
        },
        TravelAgency: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        True: {
            properties: [],
            specific_properties: []
        },
        TypeAndQuantityNode: {
            properties: ["amountOfThisGood", "businessFunction", "typeOfGood", "unitCode", "unitText", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["amountOfThisGood", "businessFunction", "typeOfGood", "unitCode", "unitText"]
        },
        UnRegisterAction: {
            properties: ["actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        UnitPriceSpecification: {
            properties: ["billingIncrement", "priceType", "referenceQuantity", "unitCode", "unitText", "eligibleQuantity", "eligibleTransactionVolume", "maxPrice", "minPrice", "price", "priceCurrency", "validFrom", "validThrough", "valueAddedTaxIncluded", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["billingIncrement", "priceType", "referenceQuantity", "unitCode", "unitText"]
        },
        UpdateAction: {
            properties: ["targetCollection", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["targetCollection"]
        },
        UseAction: {
            properties: ["expectsAcceptanceOf", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Vehicle: {
            properties: ["accelerationTime", "bodyType", "cargoVolume", "dateVehicleFirstRegistered", "driveWheelConfiguration", "emissionsCO2", "fuelCapacity", "fuelConsumption", "fuelEfficiency", "fuelType", "knownVehicleDamages", "meetsEmissionStandard", "mileageFromOdometer", "modelDate", "numberOfAirbags", "numberOfAxles", "numberOfDoors", "numberOfForwardGears", "numberOfPreviousOwners", "payload", "productionDate", "purchaseDate", "seatingCapacity", "speed", "steeringPosition", "tongueWeight", "trailerWeight", "vehicleConfiguration", "vehicleEngine", "vehicleIdentificationNumber", "vehicleInteriorColor", "vehicleInteriorType", "vehicleModelDate", "vehicleSeatingCapacity", "vehicleSpecialUsage", "vehicleTransmission", "weightTotal", "wheelbase", "additionalProperty", "aggregateRating", "audience", "award", "brand", "category", "color", "depth", "gtin12", "gtin13", "gtin14", "gtin8", "height", "isAccessoryOrSparePartFor", "isConsumableFor", "isRelatedTo", "isSimilarTo", "itemCondition", "logo", "manufacturer", "material", "model", "mpn", "offers", "productID", "productionDate", "purchaseDate", "releaseDate", "review", "sku", "weight", "width", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["accelerationTime", "bodyType", "cargoVolume", "dateVehicleFirstRegistered", "driveWheelConfiguration", "emissionsCO2", "fuelCapacity", "fuelConsumption", "fuelEfficiency", "fuelType", "knownVehicleDamages", "meetsEmissionStandard", "mileageFromOdometer", "modelDate", "numberOfAirbags", "numberOfAxles", "numberOfDoors", "numberOfForwardGears", "numberOfPreviousOwners", "payload", "productionDate", "purchaseDate", "seatingCapacity", "speed", "steeringPosition", "tongueWeight", "trailerWeight", "vehicleConfiguration", "vehicleEngine", "vehicleIdentificationNumber", "vehicleInteriorColor", "vehicleInteriorType", "vehicleModelDate", "vehicleSeatingCapacity", "vehicleSpecialUsage", "vehicleTransmission", "weightTotal", "wheelbase"]
        },
        VideoGallery: {
            properties: ["breadcrumb", "lastReviewed", "mainContentOfPage", "primaryImageOfPage", "relatedLink", "reviewedBy", "significantLink", "speakable", "specialty", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        VideoGame: {
            properties: ["actor", "cheatCode", "director", "gamePlatform", "gameServer", "gameTip", "musicBy", "playMode", "trailer", "applicationCategory", "applicationSubCategory", "applicationSuite", "availableOnDevice", "countriesNotSupported", "countriesSupported", "downloadUrl", "featureList", "fileSize", "installUrl", "memoryRequirements", "operatingSystem", "permissions", "processorRequirements", "releaseNotes", "screenshot", "softwareAddOn", "softwareHelp", "softwareRequirements", "softwareVersion", "storageRequirements", "supportingData", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "characterAttribute", "gameItem", "gameLocation", "numberOfPlayers", "quest", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["actor", "cheatCode", "director", "gamePlatform", "gameServer", "gameTip", "musicBy", "playMode", "trailer"]
        },
        VideoGameClip: {
            properties: ["actor", "clipNumber", "director", "musicBy", "partOfEpisode", "partOfSeason", "partOfSeries", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        VideoGameSeries: {
            properties: ["actor", "characterAttribute", "cheatCode", "containsSeason", "director", "episode", "gameItem", "gameLocation", "gamePlatform", "musicBy", "numberOfEpisodes", "numberOfPlayers", "numberOfSeasons", "playMode", "productionCompany", "quest", "trailer", "endDate", "issn", "startDate", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["actor", "characterAttribute", "cheatCode", "containsSeason", "director", "episode", "gameItem", "gameLocation", "gamePlatform", "musicBy", "numberOfEpisodes", "numberOfPlayers", "numberOfSeasons", "playMode", "productionCompany", "quest", "trailer"]
        },
        VideoObject: {
            properties: ["actor", "caption", "director", "musicBy", "thumbnail", "transcript", "videoFrameSize", "videoQuality", "associatedArticle", "bitrate", "contentSize", "contentUrl", "duration", "embedUrl", "encodesCreativeWork", "encodingFormat", "height", "playerType", "productionCompany", "regionsAllowed", "requiresSubscription", "uploadDate", "width", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["actor", "caption", "director", "musicBy", "thumbnail", "transcript", "videoFrameSize", "videoQuality"]
        },
        ViewAction: {
            properties: ["expectsAcceptanceOf", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        VisualArtsEvent: {
            properties: ["about", "actor", "aggregateRating", "attendee", "audience", "composer", "contributor", "director", "doorTime", "duration", "endDate", "eventStatus", "funder", "inLanguage", "isAccessibleForFree", "location", "maximumAttendeeCapacity", "offers", "organizer", "performer", "previousStartDate", "recordedIn", "remainingAttendeeCapacity", "review", "sponsor", "startDate", "subEvent", "superEvent", "translator", "typicalAgeRange", "workFeatured", "workPerformed", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        VisualArtwork: {
            properties: ["artEdition", "artMedium", "artform", "artist", "artworkSurface", "colorist", "depth", "height", "inker", "letterer", "penciler", "width", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["artEdition", "artMedium", "artform", "artist", "artworkSurface", "colorist", "depth", "height", "inker", "letterer", "penciler", "width"]
        },
        Volcano: {
            properties: ["additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        VoteAction: {
            properties: ["candidate", "actionOption", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["candidate"]
        },
        WPAdBlock: {
            properties: ["cssSelector", "xpath", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        WPFooter: {
            properties: ["cssSelector", "xpath", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        WPHeader: {
            properties: ["cssSelector", "xpath", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        WPSideBar: {
            properties: ["cssSelector", "xpath", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        WantAction: {
            properties: ["actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        WarrantyPromise: {
            properties: ["durationOfWarranty", "warrantyScope", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["durationOfWarranty", "warrantyScope"]
        },
        WarrantyScope: {
            properties: ["supersededBy", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        WatchAction: {
            properties: ["expectsAcceptanceOf", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        Waterfall: {
            properties: ["additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        WearAction: {
            properties: ["expectsAcceptanceOf", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        WebApplication: {
            properties: ["browserRequirements", "applicationCategory", "applicationSubCategory", "applicationSuite", "availableOnDevice", "countriesNotSupported", "countriesSupported", "downloadUrl", "featureList", "fileSize", "installUrl", "memoryRequirements", "operatingSystem", "permissions", "processorRequirements", "releaseNotes", "screenshot", "softwareAddOn", "softwareHelp", "softwareRequirements", "softwareVersion", "storageRequirements", "supportingData", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["browserRequirements"]
        },
        WebPage: {
            properties: ["breadcrumb", "lastReviewed", "mainContentOfPage", "primaryImageOfPage", "relatedLink", "reviewedBy", "significantLink", "speakable", "specialty", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["breadcrumb", "lastReviewed", "mainContentOfPage", "primaryImageOfPage", "relatedLink", "reviewedBy", "significantLink", "speakable", "specialty"]
        },
        WebPageElement: {
            properties: ["cssSelector", "xpath", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["cssSelector", "xpath"]
        },
        WebSite: {
            properties: ["issn", "about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "aggregateRating", "alternativeHeadline", "associatedMedia", "audience", "audio", "author", "award", "character", "citation", "comment", "commentCount", "contentLocation", "contentRating", "contentReferenceTime", "contributor", "copyrightHolder", "copyrightYear", "creator", "dateCreated", "dateModified", "datePublished", "discussionUrl", "editor", "educationalAlignment", "educationalUse", "encoding", "exampleOfWork", "expires", "fileFormat", "funder", "genre", "hasPart", "headline", "inLanguage", "interactionStatistic", "interactivityType", "isAccessibleForFree", "isBasedOn", "isFamilyFriendly", "isPartOf", "keywords", "learningResourceType", "license", "locationCreated", "mainEntity", "material", "mentions", "offers", "position", "producer", "provider", "publication", "publisher", "publisherImprint", "publishingPrinciples", "recordedAt", "releasedEvent", "review", "schemaVersion", "sourceOrganization", "spatialCoverage", "sponsor", "temporalCoverage", "text", "thumbnailUrl", "timeRequired", "translationOfWork", "translator", "typicalAgeRange", "version", "video", "workExample", "workTranslation", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["issn"]
        },
        WholesaleStore: {
            properties: ["currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        WinAction: {
            properties: ["loser", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["loser"]
        },
        Winery: {
            properties: ["acceptsReservations", "hasMenu", "servesCuisine", "starRating", "currenciesAccepted", "openingHours", "paymentAccepted", "priceRange", "actionableFeedbackPolicy", "address", "aggregateRating", "alumni", "areaServed", "award", "brand", "contactPoint", "correctionsPolicy", "department", "dissolutionDate", "diversityPolicy", "duns", "email", "employee", "ethicsPolicy", "event", "faxNumber", "founder", "foundingDate", "foundingLocation", "funder", "globalLocationNumber", "hasOfferCatalog", "hasPOS", "isicV4", "legalName", "leiCode", "location", "logo", "makesOffer", "member", "memberOf", "naics", "numberOfEmployees", "owns", "parentOrganization", "publishingPrinciples", "review", "seeks", "sponsor", "subOrganization", "taxID", "telephone", "unnamedSourcesPolicy", "vatID", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        },
        WriteAction: {
            properties: ["inLanguage", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "result", "startTime", "target", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: ["inLanguage"]
        },
        Zoo: {
            properties: ["openingHours", "additionalProperty", "address", "aggregateRating", "amenityFeature", "branchCode", "containedInPlace", "containsPlace", "event", "faxNumber", "geo", "geospatiallyContains", "geospatiallyCoveredBy", "geospatiallyCovers", "geospatiallyCrosses", "geospatiallyDisjoint", "geospatiallyEquals", "geospatiallyIntersects", "geospatiallyOverlaps", "geospatiallyTouches", "geospatiallyWithin", "globalLocationNumber", "hasMap", "isAccessibleForFree", "isicV4", "logo", "maximumAttendeeCapacity", "openingHoursSpecification", "photo", "publicAccess", "review", "smokingAllowed", "specialOpeningHoursSpecification", "telephone", "additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "potentialAction", "sameAs", "subjectOf", "url"],
            specific_properties: []
        }
    },
    valid: "2017-11-23"
};

export {SchemaOrgSchema}